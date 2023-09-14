import express from 'express';
import {userList} from "../testdata/user.js";
import i18next from "i18next";

const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('user');
});
router.post('/login', function(req, res, next) {
    const { loginId, loginPw } = req.body;
    console.log({ loginId, loginPw })

    // TO-DO DB or 서버에서 사용자 정보 매칭
    const [user] = userList.filter((v) => v.userId === loginId && v.userPw === loginPw);

    if (user) {
        req.session.user = user;
        console.log(req.session);
        res.status(200).send(user);
    } else {
        const msg = i18next.t('auth:notfound');
        console.log('msg',msg);
        res.status(500).send({msg:msg});
    }
});

router.get('/logout', function(req, res, next) {
    req.session.destroy(() => {
        req.session;
    });
    console.log('req.session : ' + req.session);
    res.redirect('/');
});


export default router;