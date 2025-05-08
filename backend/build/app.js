import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { SpotifyScraper } from "./scraper/scraper.js";
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(cookieParser());
const scraper = new SpotifyScraper();
await scraper.scrape();
export { app };
