# Moosik

A music downloading and sharing app that allows you to easily download and share music. 
Scrapped due to legal implications.
Features:
- [ ] Easily 'convert'/download Spotify/Youtube/Soundcloud playlists OR songs OR albums
- [ ] Create your own account, and add songs to your own playlists by entering their Spotify/Youtube/Soundcloud URL or even by uploading them to Mega or Mediafire. Preserve song title/thumbnail regardless of if the song gets taken down on the respective site (so save such metadata in our db)
- [ ] You can then share these playlists with a link. Now the main problem is, people have music in different platforms like Youtube, Soundcloud, etc. Basically, now you can just create a playlist here, and then (MAYBE LISTEN FROM THE APP) 'Download all' or 'Download selected'

Backend has 3 jobs:
- scraper (for links)
- storage (account management). DB used will be decided tomorrow
- API routes (e.g to access playlist, to access scraper). Some restricted, all with rate-limits

Work on the scraper part first
