# To The Girl Who Became My Favorite Chapter — Project

Premium cinematic romantic proposal website (MERN + Vite).

Quick start

1. Copy `.env.example` to `.env` in the `server/` folder and update values.

2. From the workspace root install dependencies and run dev:

```bash
npm install
npm run dev
```

This runs both backend (Express) and frontend (Vite) concurrently.

Seeding the database

From the root run:

```bash
npm run seed
```

This will populate sample poems, memories, and an admin user (see `.env.example` for seed credentials).

Structure

- server/: Express backend, models, routes, controllers and seed script
- client/: Vite React frontend with components and sections

Notes

- The frontend connects to API under the same origin during development via Vite proxy (or adjust `CLIENT_URL`).
- Admin credentials are seeded; change `SEED_ADMIN_PASSWORD` in `.env` before seeding for production.
- Many cinematic animations and assets are scaffolded as components; you should replace placeholder texts and refine animations and assets (audio, images) to personalize the experience.
