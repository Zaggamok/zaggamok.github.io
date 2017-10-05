var express = require("express");
var app = express();
app.set('view engine', 'pug');
app.set('port', (process.env.PORT || 3000));
var router = express.Router();
var path = __dirname + '/src/views/';

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

app.use(express.static('public'));

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});