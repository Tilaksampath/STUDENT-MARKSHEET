var express = require('express')
var app=express();
var bodyParser=require('body-parser');
var port=2001;

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.use('/bsignup',function(req,res){
    console.log('WELCOME TO NODE JS');
    res.sendFile(__dirname+'/views/bsignup.html');
})

app.post('/validatesignup', function(req,res){
    var name = req.body.name;
    var rno = req.body.rno;
    var email = req.body.email;
    var pword = req.body.pword;
    var cword = req.body.cword;
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("<h2>YOUR RESPONE HAS BEEN TAKEN SUCCESSFULLY </h2>");
    res.end();
})

app.use('/blogin',function(req,res){
    console.log('WELCOME TO ITVAC');
    res.sendFile(__dirname+'/views/blogin.html');
})


app.post('/validatelogin',function(req,res){
    var email = req.body.email;
    var pword = req.body.pword;
    // res.writeHead(200,{'Content-type':'text/html'});
    res.send(`NAME WHICH U ENTERED IN LOGINPAGE : ${email}, PASSWORD WHICH U ENTERED IN LOGINPAGE:${pword}`);
    // res.write("<h2>CONGRATS!! YOU HAVE SUCCESSFULLY LOGGED IN :)</h2>");
    // res.end();
})

app.get('/bsignup');
app.get('/blogin');

app.listen(port,()=>{
    console.log(`Our Server is running at port ${port}`);
})