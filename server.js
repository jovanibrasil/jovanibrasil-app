// webservice constants
const PORT = 8080
const HOST = '0.0.0.0'

const https = require('https')
const http = require('http')

const express = require('express')
const app = express()
const bodyparser = require('body-parser')
//const helmet = require('helmet')
const fs = require('fs') // write composed templates

const templatesjs = require('templatesjs')
templatesjs.dir = __dirname + "/templates/"

app.use(express.static(__dirname + '/static'));
app.use(bodyparser.urlencoded({ extended: true }))
//app.use(helmet())

function sendRes(htmlFileName, res){
    path = __dirname + "/templates/"
    fs.readFile(path+htmlFileName, (err, data) => {
        if(err) throw err; 
        result = templatesjs.setSync(data);
        res.send(result)
    })
}

app.get('/', (req, res, next) => {
    console.log('recebeu')
    sendRes("home.html", res)
})

app.get('/home', (req, res, next) => {
    sendRes("home.html", res);  
})

app.get('/projects', (req, res, next) => {
    sendRes("projects.html", res);
})

app.get('/blog', (req, res, next) => {
    sendRes("blog.html", res);
})

app.get('/cv', (req, res, next) => {
    sendRes("cv.html", res);
})

app.get('/fgsumm', (req, res, next) => {
    sendRes("fgsumm.html", res);
})

// this function redirects any route not handled to the index "/"
app.get('*',function (req, res) {
    	console.log('recebeu')
	res.redirect('/');
});

console.log('iniciando servidor')
//app.listen(443)
http.createServer(app).listen(8080)
//https.createServer(options, app).listen(443)
//console.log(`Running on http://${HOST}:${PORT}`)
