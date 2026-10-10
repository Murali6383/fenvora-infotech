# FENVARO Infotech Pvt. Ltd. – Corporate Website
React + TS + Vite + Tailwind (client) · Node + Express + MongoDB (server)

## Run
1. `cp .env.example server/.env` and fill SMTP values (secrets live only on the server).
2. `cd server && npm i && npm run dev`
3. `cd client && npm i && npm run dev` → http://localhost:5173 (Vite proxies /api to :5000)

## API
POST /api/enquiries · POST /api/internships (multipart, resume pdf/doc/docx ≤3MB, emailed as attachment, not stored) · POST /api/contact
Security: helmet, CORS allow-list, rate limiting, sanitisation, honeypot + min-fill-time spam check.

## Edit placeholders
Content: `client/src/data/content.ts`. Phone/address: `client/src/pages/Contact.tsx`. Project case studies are placeholders; replace with real work.
