// place in translate/download.js
const fs = require('fs');
const { mkdirp } = require('mkdirp')
const {loadSpreadsheet, localesPath, ns, lngs, sheetId, columnKeyToHeader, NOT_AVAILABLE_CELL, loadPath} = require('./index.cjs');
const path = require("path");

/**
 * fetch translations from google spread sheet and transform to json
 * @param {GoogleSpreadsheet} doc GoogleSpreadsheet document
 * @returns [object] translation map
 * {
 *   "ko-KR": {
 *     "key": "value"
 *   },
 *   "en-US": {
 *     "key": "value"
 *   },
 *   "id-ID": {
 *     "key": "value"
 *   }
 * }
 */
async function fetchTranslationsFromSheetToJson(doc) {
  console.log('fetchTranslationsFromSheetToJson start');
  const sheet = doc.sheetsById[sheetId];
  if (!sheet) {
    return {};
  }

  const lngsMap = {};
  const rows = await sheet.getRows();

  rows.forEach((row) => {
    // 스프레드시트의 가장 첫번째 cell을 key로 사용
    const key = row._rawData[0];

    for(let i = 1; i < (lngs.length+1); i++) {
      const lng = lngs[(i-1)];
      const translation = row._rawData[i];

      if (!lngsMap[lng]) {
        lngsMap[lng] = {};
      }

      lngsMap[lng][key] = translation || '';
    }
  });


  return lngsMap;
}

function checkAndMakeLocaleDir() {
  function resolved(index, resolve) {
    if (index === lngs.length - 1) {
      resolve();
    }
  }

  return new Promise((resolve) => {
    lngs.forEach((lng, index) => {

      const localeJsonFilePath = loadPath.replace('{{lng}}', `${lng}`).replace('{{ns}}', 'translation');
      const transfilePath  = path.dirname(localeJsonFilePath);
      mkdirp(transfilePath).then((err) => {
        if (err) {
          throw err;
        }

        if (index === lngs.length-1 ) {
          resolve();
        }
      }).catch((err)=>{
        // 하위 path가 없는경우 mkdirp가 이미 만들어져있는 상태라 catch로 빠져버린다.
        resolved(index, resolve);
      });
    });
  }).catch((err) => {
    console.log(err);
  });
}

async function updateJsonFromSheet() {
  // 폴더가 없으면 만들고
  checkAndMakeLocaleDir().then(async () => {
    const doc = await loadSpreadsheet();
    const lngsMap = await fetchTranslationsFromSheetToJson(doc);

    lngs.forEach((lng) => {
      const localeJsonFilePath = loadPath.replace('{{lng}}', `${lng}`).replace('{{ns}}', 'translation');
      const jsonString = JSON.stringify(lngsMap[lng], null, 2);

      fs.writeFile(localeJsonFilePath, jsonString, 'utf8', (err) => {
        if (err) {
          throw err;
        }
      });
    });
  });

}

updateJsonFromSheet();
