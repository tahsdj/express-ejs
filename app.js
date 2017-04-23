var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')
var requestHandler = require('./requestHandler')
var app = express();


app.set('views', __dirname + '/views')

//default view engine is jade
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) 
app.all('/', function(req, res) {  
	res.render('default', {  
		title: '首頁',  
		users: ['Kai', 'aYen', 'Kyousuke']  
	});  
 });  
app.post('/submit',(req, res) =>{  
	res.render('default',{
 		title: 'namelist',
 		users:[req.body.member1,req.body.member2]
 	})
});
app.get('/ajax',(req,res) =>{
	res.send(req.query.name)
})  

 var server = app.listen(3000, function() {  
  console.log('Listening on port 3000');  
 });   