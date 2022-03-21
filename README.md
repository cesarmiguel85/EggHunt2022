# EggHunt2022
A virtual Easter egg hunt activity using 360 images (photospheres) based on the initial project EggHunt2020.

Original project:
https://github.com/cesarmiguel85/EggHunt2020

Demo:
https://cesarmiguel85.github.io/EggHunt2020

## Technologies:
* Ionic 5 / Angular 8.3.26
* JQuery 3.5
* Photo Sphere Viewer for 360: https://photo-sphere-viewer.js.org/
* Google Sheet as DB (Apps script for write)
* Papaparse for GSheet DB read & parse

## Languages:
* English (en)
* French (fr)

## How to fork and personalise:
* Fork the repo
* Upload your 360 jpeg images WITH THE EGGS IN THEM (use Gimp or whatever tool you prefer that keep the metadata intact), to src/assets/areas/
* Rename file src/assets/JSON_DATA.ts.example to src/assets/JSON_DATA.ts and change with your images, the rectangle coordinates to your eggs, your texts...


## How to easily get the coordinates of an egg?** 

Set variable doubleclickcoordinates=true in JSON_DATA.ts.

A notification showing the coordinates x and y will show when you double click anywhere on the 360 image.


## How to set up Google Sheets as database:

Create your Google Sheet as follows:
* Sheet1: Scores
Columns: nickname	email	time	date
* Sheet2: Comments
Columns: nickname	email	date	comment

To read the data of "Scores" (Sheet1), publish the GSheet as csv (File>Publish to the web) and use the address in variable db_read_source_gsheet

To write the data: open Apps Script from the GSheet (Extensions>Apps script)


- **Create a file "scores.gs"**

```
function doPost(e) { 

  var ggs = SpreadsheetApp.openById(ScriptProperties.getProperty('active'));
  var sheet = ggs.getSheetByName("Scores");

  //read headers
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

  //get next empty row and first cell
  var nextRow = sheet.getLastRow();
  var cell = sheet.getRange('a1');
  var col = 0;

  //loop headers, if header name matches key name: copy value
  for (i in headers){ 
    if (headers[i] == "date"){
      val = new Date().toLocaleString('fr-FR',{ timeZone: 'Europe/Paris' });
    } else {
      val = e.parameter[headers[i]]; 
    }
    cell.offset(nextRow, col).setValue(val);
    col++;
  }

  //return ok=1 and some message
  var json = {
      'ok':1, 
      'message': "Données enregistrées." 
  }; 
  return ContentService.createTextOutput(JSON.stringify(json) ).setMimeType(ContentService.MimeType.JAVASCRIPT); 
  
}

//Setup function to grant access to data (to run once)
function setUp() {
  ScriptProperties.setProperty('active', SpreadsheetApp.getActiveSpreadsheet().getId());
}
```

Run the setUp function once to validate access to data.
Deploy and use the address in variable db_endpoint_log


- **Create a file "comments.gs"**

Exactly the same file, just change the line to point to the new Sheet "Comments".

```
var sheet = ss.getSheetByName("Comments");

```

Deploy and use the address in variable db_endpoint_comment

