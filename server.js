var express = require("express");
var app = express();
app.set('view engine', 'pug');
var router = express.Router();
var path = __dirname + '/app/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.render(
	path + 'index',
	{ title: 'title', message: 'message' }
  );
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use(express.static('app/static'))

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});