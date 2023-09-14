function logout() {
    fetchLogout().then(window.location.href = '/login');
}
function fetchLogout() {
    return fetch('/auth/logout').then(res => res.json());
}