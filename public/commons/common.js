function getConfigs() {
    fetchConfig();
}

function isTest() {
    return fetchConfig().IS_TEST
}


function fetchConfig() {
    // TO-DO 실환경에서는 성능저하를 줄 수 있기 때문에 사용 X
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/configs', false); // false는 동기식 요청을 의미
    xhr.send();
    if (xhr.status === 200) {
        return JSON.parse(xhr.responseText);
    }

    return null;
}

$ = (elm) => document.querySelector(elm);