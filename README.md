# globalNET

globalNET is a Tanzanian digital portal focused on knowledge, language learning, stories, marketplace, tourism, and community features.

## Available Scripts

- `npm install` — install dependencies
- `npm run dev` — start the development server
- `npm run build` — build the production application
- `npm start` — start the production server (after build)

## Features

- Knowledge Hub with article categories
- Story World with local and regional stories
- Language Academy with Chinese, English, Spanish, French, German, and Swahili lessons
- Marketplace with electronics, fashion, food, home, audio, cameras, and local products
- Tourism section with flights, hotels, tours, and visa guides
- Admin routes for managing content and users
- PWA support with manifest and service worker

## Local Setup

1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`

## Notes

- If port `3000` is busy, use `npm run dev -- -p 3001`
- Ensure `.env.local` is configured with your NextAuth, database, and API keys
