import express from 'express';
import generateHTML from '../public/javascripts/layout.js';
import {menuModel} from '../public/javascripts/menu.js';
import {loginView} from "../public/javascripts/view/login.view.js";
import fs from "fs";
import configs from "../configs.js";

const router = express.Router();

async function loadLayout(req, res, next) {
  res.send(await generateHTML(req, menuModel));

  next();
}



router.put("/api/syncMenu", (req, res) => {
  menuModel.init({ menuList: req.body.menuList });
  res.status(200).send(menuModel.menuList);
});

// single page
router.get("/login", function(req, res, next) {
  res.send(loginView());
});

router.get('/configs', (req, res) => {
  const jsonData = configs.ENV==='LOCAL' ? configs : null;
  res.json(jsonData);
});

// menu layout page
router.get('/main', loadLayout, function(req, res, next) {

});

// remain all path
router.get(/\/.*/,  loadLayout, function(req, res, next) {

});



export default router;