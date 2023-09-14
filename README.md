# frontFramework

가장 기본이 되는 환경만을 이용하여 웹 어플리케이션을 구축한다.
vanilla js를 지양하지만 적절하게 타협하였다.


### 기본
1. 템플릿 엔진 없이 화면은 HTML, CSS로만 구축
2. 기능 및 동작은 Javascipt
3. 주석은 JSDoc

### Dependencies
1. Express js : 웹 프레임워크(가장기본)
2. i18n : 다국어처리
3. env-cmd : 환경설정
4. pm2 : 프로세스 관리
5. sanitize-html : Block XSS
6. Helmet : HTTP response header

### 심화
1. web component를 통해 html, javascript로 component를 구축한다.

### 구조
1. [public](public) : html, css, javascript, image 등 정적파일의 경로

    * 참고 : [README.md](README.md)
2. [routes](routes) : 웹 어플리케이션 라우터
3. [translate](translate) : 번역 추출, 업로드, 다운로드 기능

### To-do
1. 로그인 관리
2. 