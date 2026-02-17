/**
 * Google Apps Script — Paste this into your Google Sheet's Apps Script editor.
 *
 * Setup:
 *   1. Create a new Google Sheet
 *   2. Add headers in Row 1: Timestamp | Name | Email | Phone | Course | Message
 *   3. Go to Extensions > Apps Script
 *   4. Replace the default code with this entire file
 *   5. Click Deploy > New deployment
 *   6. Select type: Web app
 *   7. Set "Execute as": Me
 *   8. Set "Who has access": Anyone
 *   9. Click Deploy and copy the Web App URL
 *  10. Paste the URL into GOOGLE_SCRIPT_URL in contact.component.ts
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),        // Timestamp
      data.name,         // Name
      data.email,        // Email
      data.phone,        // Phone
      data.course,       // Course
      data.message       // Message
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
