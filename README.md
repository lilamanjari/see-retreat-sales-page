# SEE Retreat Sales Page

One-page responsive landing page for the SEE retreat, built with Next.js.

## Stack

- Next.js
- React
- CSS via `app/globals.css`
- `lucide-react` for icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

If another local project is already using the default port, run:

```bash
npm run dev -- --port 3001
```

Then open [http://localhost:3000](http://localhost:3000) or the alternate port you chose.

## Scripts

- `npm run dev` starts the local development server
- `npm run build` creates a production build
- `npm run start` serves the production build

## Project Structure

```text
app/
  globals.css
  layout.js
  page.js
public/
  HeroArt.png
  SharingCircle.png
  TheJourneyArt.png
  symbols/
next.config.mjs
package.json
```

## Design Notes

- Heading font system is based on `Cormorant Garamond`
- Body font system is based on `Inter`
- The page is designed to closely match the provided mockup, while adapting gracefully for mobile
- The founder video is currently a placeholder until the final video asset is available

## Assets

The project uses local image assets stored in `public/`.

If you add or replace design assets later, keep the filenames stable when possible to avoid updating component references.

## Deployment

This project can be deployed to any platform that supports Next.js, including Vercel.
