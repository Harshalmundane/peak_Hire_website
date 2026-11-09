# PeakHire landing page (Next.js App Router + Bootstrap 5)

    npm install
    npm run dev      # http://localhost:3000

- Content (stats, plans, reviews, nav): `data/site.js` (mock, replace with verified values)
- Courses and syllabi: `data/courses.js`
- Placeholder images (replace later): `data/assets.js`
- Lead modal is a frontend-only mock; no data is sent.

## Enquiry forms -> Google Sheets
1. Paste `google-apps-script/Code.gs` into Apps Script and save. If the script project is standalone, copy the ID from the target spreadsheet URL (`/spreadsheets/d/ID/edit`) into `SHEET_ID`; if it is opened through that sheet's Extensions > Apps Script menu, leave `SHEET_ID` blank. Run `initialSetup` once from the editor and approve access. This stores the spreadsheet ID for web app requests and creates the `Enquiries` tab with headers if needed.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_ENQUIRY_API_URL` to the Web app URL (ends with `/exec`).
3. Restart `npm run dev`.
