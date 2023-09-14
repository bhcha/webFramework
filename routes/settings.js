import fs from 'fs';
import express from 'express';

const router = express.Router();
router.get('/', function(req, res, next) {
    res.send('settings');
});

router.get('/getCookie/:key', function(req, res, next) {
    console.log('getCookie called');

    const key = req.params.key;
    const cookie = getCookies(req);

    res.status(200).json(cookie[key]);
});
router.post('/setCookie', function(req, res, next) {
    const params = req.body;
    console.log('params', params);
    const key = params.key;
    const value = params.value;
    const expireDay = params.expireDay ?? 0;
    let expire = new Date();
    expire.setDate(expire.getDate() + expireDay);

    res.cookie(key, value, {
        expires: expire,
        httpOnly: true,
        path: '/',
        signed:true
    });

    // 쿠키 생성 코드
    res.status(200).json({result:'success'});
});

router.delete('/deleteCookie/:key', function(req, res, next) {
    const key = req.params.key;
    const cookie = getCookies(req);

    res.clearCookie(key, cookie[key], {
        httpOnly: true,
        secure: true,
    });

    // 쿠키 생성 코드
    res.status(200).json({result:'success'});
});

// 번역파일이 public 경로에 없는 경우 이용
router.get('/getTransJson/:lng', (req, res) => {
    const lng = req.params.lng;

    // JSON 파일 경로
    const filePath = `./translate/assets/locales/${lng}/translation.json`;

    // 파일을 읽고 JSON으로 파싱하여 클라이언트에게 전송
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).json({ error: 'Failed to read JSON file' });
            return;
        }

        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (jsonErr) {
            console.error('Error parsing JSON:', jsonErr);
            res.status(500).json({ error: 'Failed to parse JSON' });
        }
    });
});

let getCookies = (req) => req.signedCookies;

export default router;