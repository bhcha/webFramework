import ko_KR from '../assets/locales/ko-KR/translation.json' assert {type:'json'};
import en_US from '../assets/locales/en-US/translation.json' assert {type:'json'};
import id_ID from '../assets/locales/id-ID/translation.json' assert {type:'json'};
const lngs = ['ko-KR','en-US','id-ID'];

function loadResource(lng) {
    let module;

    switch (lng) {
        case 'ko-KR': {
            module = ko_KR;
            break;
        }
        case 'en-US': {
            module = en_US;
            break;
        }
        case 'id-ID': {
            module = id_ID;
            break;
        }
        default:
            break;
    }

    return module;
}

function getResources(lngs) {
    const resources = {};

    lngs.forEach((lng) => {
        resources[lng] = {
            translation: loadResource(lng),
        };
    });

    return resources;
}

function initTranslate() {
    const lng = 'ko-KR';
    i18next.init({
        lng,
        fallbackLng: false,
        returnEmptyString: false,
        keySeparator: false,
        nsSeparator: false,
        interpolation: {
            prefix: '%{',
            suffix: '}',
        },
        parseMissingKeyHandler(key) {
            /* eslint-disable-next-line no-console */
            const keySeparator = '~~';
            return key.includes(keySeparator) ? key.split(keySeparator)[1] : key;
        },
        resources: getResources(lngs),
    });

}

const changeLanguage = function (lng){
    i18next.changeLanguage(lng);
    i18next.t('translation');
}

/**
 * static 경로가 아닐경우 아래와 같이 fetch로 translate
 * 사용안함
 * 사유 : 현재 해당없음
 */
async function  getFetchResources(lngs) {
    const resources = {};

    for (const lng of lngs) {
        resources[lng] = {translation : await fetchLang(lng)};
    }

    return resources;
}

async function fetchLang(lng) {
    return fetch(`/settings/getTransJson/${lng}`)
        .then((response) => response.json())
        ;
}

initTranslate();