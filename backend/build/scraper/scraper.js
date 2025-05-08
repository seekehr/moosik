import { chromium } from 'playwright';
export class SpotifyScraper {
    async scrape(url = 'https://open.spotify.com/album/0fSfkmx0tdPqFYkJuNX74a') {
        const browser = await chromium.launch();
        const page = await browser.newPage();
        try {
            // Set higher timeouts for slow connections
            page.setDefaultTimeout(45000);
            page.setDefaultNavigationTimeout(45000);
            console.log(`Navigating to ${url}...`);
            await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
            console.log('Basic page content loaded');
            // Quick wait for app to initialize
            await page.waitForTimeout(3000);
            // Capture basic album info in a direct way
            const albumTitle = await page.locator('h1').nth(1).textContent().catch(() => 'Unknown Album');
            console.log('Album Title:', albumTitle || 'Unknown Album');
            const artistName = await page.locator('a[href*="/artist/"]').first().textContent().catch(() => 'Unknown Artist');
            console.log('Artist:', artistName || 'Unknown Artist');
            console.log('Waiting for tracks to load...');
            // Get track names first - this seems to be more reliable
            await page.waitForSelector('a[data-testid="internal-track-link"]', { timeout: 15000 }).catch(() => {
                console.log('Timed out waiting for track links, will try anyway');
            });
            // First try a more direct approach - much faster than the previous method
            const trackInfos = await page.$$eval('div[role="row"]:has(a[data-testid="internal-track-link"])', (rows) => {
                return rows.map(row => {
                    // Get track name
                    const nameElement = row.querySelector('a[data-testid="internal-track-link"]');
                    const name = nameElement ? nameElement.textContent?.trim() : 'Unknown Track';
                    // Try multiple approaches to get duration
                    let duration = 'Unknown';
                    // Method 1: Look for time format elements
                    const timeElements = Array.from(row.querySelectorAll('div, span'));
                    for (const el of timeElements) {
                        if (el.textContent && /^\d+:\d{2}$/.test(el.textContent.trim())) {
                            duration = el.textContent.trim();
                            break;
                        }
                    }
                    // Method 2: Specific class or attribute related to duration
                    if (duration === 'Unknown') {
                        const durationCell = row.querySelector('[aria-colindex="5"]') ||
                            row.querySelector('[data-testid="tracklist-duration"]') ||
                            row.querySelector('div[aria-colindex]');
                        if (durationCell && durationCell.textContent) {
                            duration = durationCell.textContent.trim();
                        }
                    }
                    return { name, duration };
                });
            });
            console.log(`Found ${trackInfos.length} tracks`);
            // If we didn't get durations, try once more with a different approach
            if (trackInfos.length > 0 && trackInfos.every(track => track.duration === 'Unknown')) {
                console.log('Durations not found, trying fallback approach...');
                // Try looking for aria-colindex attributes which often contain durations
                await page.evaluate(() => {
                    // Scroll down to ensure all track rows are fully in the viewport
                    window.scrollTo(0, document.body.scrollHeight);
                });
                // Wait a moment for any lazy-loaded content
                await page.waitForTimeout(2000);
                // Click a track to ensure the durations are loaded
                await page.locator('div[role="row"]').first().click().catch(() => { });
                // Try getting durations directly
                const durations = await page.$$eval('div[role="row"] [aria-colindex="5"], div[role="row"] div.Type__TypeElement-sc-goli3j-0', elements => elements.map(el => {
                    const text = el.textContent?.trim() || '';
                    return /^\d+:\d{2}$/.test(text) ? text : '';
                }).filter(text => text));
                console.log(`Found ${durations.length} durations separately`);
                // Combine with our existing track names
                if (durations.length > 0) {
                    durations.forEach((duration, i) => {
                        if (i < trackInfos.length) {
                            trackInfos[i].duration = duration;
                        }
                    });
                }
            }
            // Output tracks with durations
            if (trackInfos.length > 0) {
                console.log(`Successfully found ${trackInfos.length} tracks:`);
                trackInfos.forEach((track, index) => {
                    console.log(`${index + 1}. ${track.name} - ${track.duration}`);
                });
            }
            else {
                console.log('Could not extract any tracks from the page');
                // Last resort: Try direct approach with separate selectors
                const trackNames = await page.locator('a[data-testid="internal-track-link"]').allTextContents();
                console.log(`Found ${trackNames.length} track names with direct selector`);
                if (trackNames.length > 0) {
                    trackNames.forEach((name, index) => {
                        console.log(`${index + 1}. ${name} - Unknown`);
                    });
                }
            }
        }
        catch (error) {
            console.error('Scraping error:', error);
        }
        finally {
            await browser.close();
        }
    }
}
