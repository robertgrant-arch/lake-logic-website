/**
 * Lake Logic — Contact Form Handler
 *
 * Google Apps Script web app that:
 *   1. Appends form submissions to a Google Sheet
 *   2. Sends email notifications to info@lake-logic.com
 *   3. Returns JSON success/error responses
 *
 * SETUP:
 *   1. Create a new Google Sheet. Name the first tab "Leads".
 *   2. Add headers in row 1:
 *      Timestamp | Name | Email | Phone | City | Message | Source | Page URL | Status
 *   3. Open Extensions → Apps Script and paste this file.
 *   4. Set NOTIFICATION_EMAIL below (already set to info@lake-logic.com).
 *   5. Deploy → New deployment → Web app:
 *      - Execute as: Me
 *      - Who has access: Anyone
 *   6. Copy the web app URL and add it to Vercel as:
 *      NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=<your-url>
 */

var NOTIFICATION_EMAIL = 'info@lake-logic.com';
var SHEET_TAB_NAME = 'Leads';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // Honeypot check — silently discard spam
    if (data.company && data.company.length > 0) {
      return buildResponse({ status: 'ok' });
    }

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return buildResponse({ status: 'error', message: 'Missing required fields.' }, 400);
    }

    // Append to Google Sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_TAB_NAME);
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    }

    var timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });

    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.phone || '',
      data.city || '',
      data.message,
      data.source || 'lake-logic-website',
      data.pageUrl || '',
      'New Lead'
    ]);

    // Send email notification
    var subject = 'New Inquiry: ' + data.name + ' — Lake Logic Website';
    var htmlBody = buildEmailHtml(data, timestamp);

    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: subject,
      htmlBody: htmlBody,
      replyTo: data.email,
      name: 'Lake Logic Website'
    });

    return buildResponse({ status: 'ok', message: 'Submission received.' });

  } catch (err) {
    Logger.log('doPost error: ' + err.toString());
    return buildResponse({ status: 'error', message: 'Server error.' }, 500);
  }
}

function buildResponse(body, code) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}

function buildEmailHtml(data, timestamp) {
  return '' +
    '<div style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif; max-width: 560px; margin: 0 auto;">' +
      '<div style="background: #1B2A4A; padding: 24px 28px; border-radius: 12px 12px 0 0;">' +
        '<h1 style="color: #ffffff; font-size: 20px; margin: 0;">New Website Inquiry</h1>' +
        '<p style="color: rgba(255,255,255,0.6); font-size: 13px; margin: 6px 0 0;">Lake Logic Contact Form</p>' +
      '</div>' +
      '<div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: none; padding: 28px; border-radius: 0 0 12px 12px;">' +
        '<table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #334155;">' +
          emailRow('Name', data.name) +
          emailRow('Email', '<a href="mailto:' + data.email + '" style="color: #3B82F6;">' + data.email + '</a>') +
          emailRow('Phone', data.phone || '<span style="color:#94a3b8;">Not provided</span>') +
          emailRow('City / Area', data.city || '<span style="color:#94a3b8;">Not provided</span>') +
          emailRow('Message', data.message) +
        '</table>' +
        '<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />' +
        '<p style="font-size: 12px; color: #94a3b8; margin: 0;">' +
          'Submitted: ' + timestamp + '<br />' +
          'Source: ' + (data.source || 'lake-logic-website') + '<br />' +
          'Page: ' + (data.pageUrl || 'N/A') +
        '</p>' +
      '</div>' +
    '</div>';
}

function emailRow(label, value) {
  return '' +
    '<tr>' +
      '<td style="padding: 8px 12px 8px 0; font-weight: 600; color: #1B2A4A; vertical-align: top; white-space: nowrap; width: 100px;">' + label + '</td>' +
      '<td style="padding: 8px 0; vertical-align: top;">' + value + '</td>' +
    '</tr>';
}

/**
 * Optional: handle GET requests for health-check.
 */
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', service: 'lake-logic-contact-form' }))
    .setMimeType(ContentService.MimeType.JSON);
}
