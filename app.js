var express    = require('express');
var bodyParser = require('body-parser');
var weather    = require('openweather-apis');


//init app
var app = express();

//set the template engine
app.set('view engine','ejs');

//fetch the data from request
app.use(bodyParser.urlencoded({extended:false}));

//default pageload
app.get('/',function(req,res){
    res.render('home',{temp:null});
});

app.post('/',function(req,res){
    weather.setCity(req.body.city);
    weather.setAPPID('69426bc8a4329dc673f2bed17c4084bf');
    weather.getAllWeather(function(err,temp){
        console.log(temp);
        res.render('home',{temp:temp});
    });
});

var port  = process.env.PORT || 3001;
app.listen(port,function(){
    console.log('server running at '+port);
});