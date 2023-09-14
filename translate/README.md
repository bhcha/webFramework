# translate
프로젝트 번역 파일을 구글 스프레드 시트를 이용하여 관리(불러오기, 업로드, 다운로드) 한다.
* 참고 : 프로젝트는 es module이나 i18next-scanner 모듈이 commonJS 관련 문제가 발생하기에
cjs파일로 이용한다.


### [i18next-scanner.config.cjs](i18next-scanner.config.js)
`# npm scan:i18n`

프로젝트 내 ['i18next.t', 'i18n.t', '$i18n.t','data-i18n']에 해당하는 property, function 등을 스캔하여
asset폴더내 lngs['ko-KR', 'en-US', ...]별 언어파일을 자동으로 만들어준다.

<pre>
-- js file
const test = i18next.t('test');
-- html file
&#60;a href="/menu1" data-i18n="A:apple">&#60;/a>
</pre>

### [upload.cjs](upload.js)
`# npm upload:i18n`

프로젝트내 다국어 파일을 구글 스프레드 시트에 업로드 한다.

### [download.cjs](download.js)
`# npm download:i18n`

구글 스프레드 시트를 프로젝트내 다국어 파일에 덮어씌운다.

### [index.cjs](index.js)
구글 스프레드를 불러오기 위한 기초 파일

### [credentials.json](credentials.json)
** 개인정보 주의**

구글 스프레드 시트를 연결하기위한 정보파일