import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import config from './configs.js';
import indexRouter from './routes/index.js';
import settingsRouter from './routes/settings.js';
import authRouter from './routes/auth.js';
import helmet from "helmet";
import MemoryStore from "express-session/session/memory.js";
import session from "express-session";
import {getI18nextLang, initTranslate} from "./translate/translate.js"


const app = express();


// 5 minute
const maxAge = 1000 * 60 * 5;

const sessionObj = {
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new MemoryStore({ checkPeriod: maxAge }),
    cookie: {
        maxAge: maxAge
    },
};

app.use(session(sessionObj));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(config.COOKIE_SECRET));
app.use(express.static(path.join(config.ROOT_DIRECTORY, 'public')));

if (config.ENV === 'production') {
    app.use(logger('combined'));
    app.use(helmet( { contentSecurityPolicy: false } )); // contentSecurityPolicy는 꽤 복잡한 설정이기 때문에 일단 꺼둔다. (후술)
    app.use(helmet.hidePoweredBy())
    app.use(helmet.xssFilter());    // xss 공격을 막아준다. detail한 공격(textarea) 등은 sanitize-html로 막아준다.

} else {
    app.use(express.static(path.join(config.ROOT_DIRECTORY, 'testData')));
    app.use(logger('dev'));
}

function setExpressRoute() {
    // index router 에서 나머지 모든 path를 가로채기 때문에 indexRouter 위에 위치시켜야 한다.
    app.use('/auth', authRouter);
    app.use('/settings', settingsRouter);

    app.use('/', indexRouter);
}

function printEnvironment() {
    console.log(`
========================================================================
    ENV : ${config.ENV}
    ROOT DIR : ${config.ROOT_DIRECTORY}
    COOKIE SECRET : ${config.COOKIE_SECRET}
    TEST MODE : ${config.IS_TEST}
    SUPPORT LANGUAGE : ${config.LANGUAGE}
    i18next : ${getI18nextLang()}
========================================================================
    `);
}


function setTranslate() {
    initTranslate();
}

async function fetchLang(lng) {
    return fetch(`/settings/getTransJson/${lng}`)
        .then((response) => response.json())
        ;
}

setTranslate();
setExpressRoute();
printEnvironment();

export default app;