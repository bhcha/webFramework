// place in translate/index.js
const {GoogleSpreadsheet} = require('google-spreadsheet');
const {JWT} = require('google-auth-library');
const i18nextConfig = require('./i18next-scanner.config.cjs');

/**
 * https://console.cloud.google.com/iam-admin/serviceaccounts
 * 프로젝트 > 키(json) 파일 다운받아 사용하는 키
 */
const credentials = require('./credentials.json');

/**
 *  https://docs.google.com/spreadsheets/d/{spreadSheetDocId}/edit?usp=sharing
  */
const spreadsheetDocId = credentials.spreadsheetDocId;
const lngs = i18nextConfig.options.lngs;
const loadPath = i18nextConfig.options.resource.loadPath;
const rePluralPostfix = new RegExp(/_plural|_[\d]/g);
const sheetId = 0; // your sheet id
const NOT_AVAILABLE_CELL = '_N/A';
const columnKeyToHeader = {
  key: '키',
  'ko-KR': '한글',
  'en-US': '영어',
  'id-ID': '인도네시아어'
};

/**
 * getting started from https://theoephraim.github.io/node-google-spreadsheet
 */
async function loadSpreadsheet() {
  // eslint-disable-next-line no-console
  console.info(
    '\u001B[32m',
    '=====================================================================================================================\n',
    '# i18next auto-sync using Spreadsheet\n\n',
    '  * Download translation resources from Spreadsheet and make /assets/locales/{{lng}}/{{ns}}.json\n',
    '  * Upload translation resources to Spreadsheet.\n\n',
    `The Spreadsheet for translation is here (\u001B[34mhttps://docs.google.com/spreadsheets/d/${spreadsheetDocId}/#gid=${sheetId}\u001B[0m)\n`,
    '=====================================================================================================================',
    '\u001B[0m'
  );

  const serviceAccountAuth = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: [ // 모든 Google Sheets 스프레드시트를 보고, 수정하고, 만들고, 삭제합니다.
      'https://www.googleapis.com/auth/spreadsheets',
    ],

  });

  const doc = new GoogleSpreadsheet(spreadsheetDocId, serviceAccountAuth);
  await doc.loadInfo();

  return doc;
}

function getPureKey(key = '') {
  return key.replace(rePluralPostfix, '');
}

module.exports = {
  loadPath,
  loadSpreadsheet,
  getPureKey,
  lngs,
  sheetId,
  columnKeyToHeader,
  NOT_AVAILABLE_CELL,
};
