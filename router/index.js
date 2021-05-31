const express =require('express')
const article =require('../mddileware/article')

const indexApp = express()

indexApp.get('/',[article.getHot],(req,res)=>{
    res.render('index',{hots:req.hots})
})

module.exports = indexApp;