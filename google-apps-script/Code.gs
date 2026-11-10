/**
 * PeakHire enquiry API (Google Apps Script) -> saves each enquiry as a new row in Google Sheets.
 * Paste this whole file into: your Google Sheet > Extensions > Apps Script.
 */
const SHEET_NAME = "Enquiries";        // tab name (created automatically if missing)
const SHEET_ID = "";                    // optional: set the spreadsheet ID here, or run initialSetup() once
const SHEET_ID_PROPERTY = "PEAKHIRE_SPREADSHEET_ID";
const TIMEZONE = "Asia/Kolkata";
const DEFAULT_STATUS = "New";
const STATUSES = ["New", "Contacted", "Follow-up", "Converted", "Closed"];
const HEADERS = ["Date", "Time", "Name", "Email", "Phone", "Enquiry", "Source", "Lead Status"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
    const data = JSON.parse((e && e.postData && e.postData.contents) || "{}");

    if (data.website) return json_({ ok: true }); // honeypot filled = bot, ignore silently

    const name = String(data.name || "").trim().slice(0, 100);
    const email = String(data.email || "").trim().slice(0, 150);
    const phone = String(data.phone || "").trim().slice(0, 20);
    const enquiry = String(data.enquiry || "").trim().slice(0, 1000);
    const source = String(data.source || "Website").trim().slice(0, 150);

    if (name.length < 2) return json_({ ok: false, error: "Please enter your name." });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return json_({ ok: false, error: "Please enter a valid email." });
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 15) return json_({ ok: false, error: "Please enter a valid phone number." });
    if (enquiry.length < 5) return json_({ ok: false, error: "Please enter your enquiry." });

    const sheet = getSheet_();
    const now = new Date();
    const row = [
      Utilities.formatDate(now, TIMEZONE, "dd-MMM-yyyy"),
      Utilities.formatDate(now, TIMEZONE, "hh:mm:ss a"),
      name, email, phone, enquiry, source, DEFAULT_STATUS,
    ];
    const target = sheet.getRange(sheet.getLastRow() + 1, 1, 1, row.length);
    target.setNumberFormat("@"); // plain text: keeps +91 / leading zeros and blocks formula injection
    target.setValues([row]);
    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: "Server error. Please try again." });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

// Opening the /exec URL in a browser shows this, handy to test the deployment.
function doGet() {
  return json_({ ok: true, message: "PeakHire enquiry API is running" });
}

// Run this once from the Apps Script editor while the script is opened
// from the target Google Sheet (Extensions > Apps Script). It stores the
// spreadsheet ID so web app requests can open the sheet without an active UI.
function initialSetup() {
  const ss = SHEET_ID
    ? SpreadsheetApp.openById(SHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();

  if (!ss) {
    throw new Error("Could not open the spreadsheet. Check SHEET_ID.");
  }

  PropertiesService.getScriptProperties()
    .setProperty(SHEET_ID_PROPERTY, ss.getId());

  getSheet_();
}

function getSheet_() {
  const spreadsheetId = SHEET_ID || PropertiesService.getScriptProperties().getProperty(SHEET_ID_PROPERTY);
  if (!spreadsheetId) {
    throw new Error("Spreadsheet is not configured. Run initialSetup() from the Apps Script editor or set SHEET_ID to the Google Sheet ID.");
  }
  const ss = SpreadsheetApp.openById(spreadsheetId);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight("bold").setBackground("#e6f0fb");
    sheet.setFrozenRows(1);
    sheet.getRange(2, HEADERS.length, 1000, 1).setDataValidation(
      SpreadsheetApp.newDataValidation().requireValueInList(STATUSES, true).setAllowInvalid(true).build()
    );
  }
  return sheet;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
