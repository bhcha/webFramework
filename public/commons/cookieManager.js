function setCookie(key, value, expire) {
    fetch('/settings/setCookie', {
        method: "POST", // *GET, POST, PUT, DELETE 등
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            key: key
            , value: value
            , expireDay: expire
        })
    })
        .then(r => r.json())
        .then((result => result));
}

function getCookie(key) {
    fetch(`/settings/getCookie/${key}`, {
        method: 'GET',
    })
        .then(r => r.json())
        .then((result => console.log(result)));
}

function deleteCookie(key) {
    fetch(`/settings/deleteCookie/${key}`, {
        method: 'DELETE',
    })
        .then(r => r.json())
        .then((result => result));
}