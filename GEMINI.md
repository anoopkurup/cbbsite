# GEMINI.md

## Project Overview

This project is a modern, responsive podcast website for "Click, Brand, and Beyond," a marketing and business insights podcast. It is built with Next.js 14 and the App Router, using TypeScript for type safety. The styling is done with Tailwind CSS and shadcn/ui, creating a clean and modern pastel-themed design. The website is designed to be mobile-first and SEO-optimized.

A key feature is the integration with the Spotify API to fetch and display podcast episodes. The site also includes features like advanced search and filtering of episodes, host profiles, a newsletter signup, and links to various podcast platforms.

## Building and Running

The following scripts are available to run, build, and lint the project:

*   **`npm run dev`**: Starts the development server at `http://localhost:3000`.
*   **`npm run build`**: Creates a production-ready build of the application.
*   **`npm start`**: Starts the production server.
*   **`npm run lint`**: Lints the codebase using ESLint to enforce code quality.

### Prerequisites

*   Node.js 18+
*   npm or yarn

### Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Set up environment variables:**
    Copy the `.env.example` file to `.env` and fill in your Spotify API credentials.
    ```bash
    cp .env.example .env
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```

## Development Conventions

*   **TypeScript:** The project is written in TypeScript, so all new code should be strongly typed.
*   **Component-Based Architecture:** The UI is built with reusable React components, many of which are from the shadcn/ui library. New UI elements should follow this pattern.
*   **Styling:** Styling is done with Tailwind CSS. Use utility classes for styling and create new components for reusable styles. The color palette is defined in `tailwind.config.ts`.
*   **File Structure:** The `src` directory contains the main application code, with subdirectories for `app` (Next.js App Router pages), `components`, `data`, `lib`, and `types`.
*   **Data Fetching:** Episode data is fetched from the Spotify API via a service layer in `src/lib/episodesService.ts`. This service includes a caching mechanism to reduce API calls.
*   **Linting:** Code should be formatted and linted according to the rules in `.eslintrc.json`.

## Key Files

*   `src/app/layout.tsx`: The main layout component for the application.
*   `src/app/page.tsx`: The homepage of the website.
*   `src/app/episodes/[slug]/page.tsx`: The page for individual podcast episodes.
*   `src/components/EpisodeCard.tsx`: A key component for displaying episode information.
*   `src/lib/episodesService.ts`: The service for fetching episode data from the Spotify API.
*   `tailwind.config.ts`: The configuration file for Tailwind CSS, including the color palette.
*   `next.config.js`: The configuration file for Next.js.
