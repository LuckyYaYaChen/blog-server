"use strict";
//  const models = require('./db');
const express = require('express')
const Mongoose = require('mongoose')
const router = express.Router();
const path = require('path')
const fs = require('fs')
const promise = require('promise')

const articleControler = require('./controler/article.controler.js')
const articleListControler = require('./controler/articleList.controler.js')
const userControler = require('./controler/user.controler.js')
const systemControler = require('./controler/system.controler.js')

// 全局操作
router.get('*', systemControler.addVisitedNum)
router.get('/api/getVisitedNum', systemControler.getVisitedNum)

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/
// 文章集操作
router.get('/api/getArticleList', articleListControler.getArticleList)
router.post('/api/addArticleList', articleListControler.addArticleList)
router.post('/api/removeArticleList', articleListControler.removeArticleList)

// 文章操作
router.get('/api/getPublishArticleNum', articleControler.getPublishArticleNum)
router.get('/api/getAllArticle', articleControler.getAllArticle)
router.post('/api/getArticleById', articleControler.getArticleById)
router.post('/api/getPublishArticleInOneListById', articleControler.getPublishArticleInOneListById)
router.post('/api/addOrModifyArticle', articleControler.addOrModifyArticle)
router.post('/api/removeArticle', articleControler.removeArticle)

// 用户操作
router.post('/api/signUp', userControler.signUp)
router.post('/api/signIn', userControler.signIn)
router.post('/api/signOut', userControler.signOut)

module.exports = router;
