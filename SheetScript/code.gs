function doGet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("evidencija");
  const data = ws.getRange("A1").getDataRegion().getValues();
  const headers = data.shift();
  
  

  const jsonArray = data.map((r) => {
    let object = {};

    headers.forEach((h, i) => {
      object[h] = r[i];
    });

    return object;
  });


  const response = [{ status: 200, data: jsonArray, employees: headers}];

  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
    ContentService.MimeType.JSON
  );
}