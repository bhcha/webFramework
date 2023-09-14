const _LOG = 'viewmodel_login.js'

function initEvent() {
    document.addEventListener('DOMContentLoaded', () => {
        if(isTest()) {
            $('#loginId').value = 'bhcha';
            $('#loginPw').value = 'bhcha12!';
        }
    });

    $('#loginBtn').addEventListener('click', login);
}


async function login() {
    try {
        startLoading();
        if (isValidLoginInfo()) {
            const loginResult = await fetchLogin();
            verifyLoginResult(loginResult);
        }
    } catch (ex) {
        console.log(_LOG, ex);
    }
}

function verifyLoginResult(result) {
    endLoading();

    if(result.status === 200) {
        location.href = "/main";
    } else {
        result.json().then(res => showAlert(res.msg));
    }
}


function isValidLoginInfo() {
    const loginId = getLoginId();
    if (loginId.trim().length === 0) {
        showAlert(i18next.t('auth:inputId'));
        return false;
    }
    const logPw = getLoginPw();
    if (logPw.trim().length === 0) {
        showAlert(i18next.t('auth:inputPw'));
        return false;
    }

    return true;
}

function getLoginId() {
    return $('#loginId').value ?? '';
}

function getLoginPw() {
    return $('#loginPw').value ?? '';
}

function fetchLogin() {
    const headers = {'Content-Type': 'application/json',};
    const body = JSON.stringify({
          loginId: getLoginId()
        , loginPw: getLoginPw()
    });
    return fetch('/auth/login', { method: 'POST', headers, body });
}



initEvent();