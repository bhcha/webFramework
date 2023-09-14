const path = require('path');

const COMMON_EXTENSIONS = '/**/*.{js,html}';


module.exports = {
  input: [
      `./public/html/**/*.html`
    , `./public/javascripts/**/*.js`
    , `./routes${COMMON_EXTENSIONS}`
    ],
  options: {
    defaultLng: 'ko-KR',
    lngs: process.env.LANGUAGE.split('|'),
    func: {
      list: ['i18next.t', 'i18n.t', '$i18n.t','data-i18n'],
      extensions: ['.js', '.html']
    },
    resource: {
      loadPath: path.join(__dirname, '../public/assets/locales/{{lng}}/{{ns}}.json'),
      savePath: path.join(__dirname, '../public/assets/locales/{{lng}}/{{ns}}.json'),
    },
    defaultValue(lng, ns, key) {
      const keyAsDefaultValue = ['ko-KR'];
      if (keyAsDefaultValue.includes(lng)) {
        const separator = '~~';
        const value = key.includes(separator) ? key.split(separator)[1] : key;

        console.log('new item scan>>', key, value);
        return value;
      }

      return '';
    },
    keySeparator: false,
    nsSeparator: false,
    prefix: '%{',
    suffix: '}',
  },
};
