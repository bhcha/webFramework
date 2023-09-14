# PROJECT MANUAL

### 레이아웃
[widgets.html](public%2Fhtml%2Fmanual%2Fwidgets.html)

### 기능
1. alert
``` javascript
showAlert(msg);
```
2. loading
```javascript
startLoading();
endLoading();
```
3. toast
```javascript
showToast(msg);
```

4. cookie
```javascript
setCookie(key, value, expire);
getCookie(key);
deleteCookie(key);
```
5.auth
```javascript
logout();
```
6.translate
```javascript
const text = i18next.t('targetId');
```
```html
&#60;a href="/menu1" data-i18n="A:apple">&#60;/a>
```
7.test mode
```javascript
const isTest = isTest();
```