/* Name: Jiayun Yan
 * Email: yanjia@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var app = express();
var expressHandlebars = require('express-handlebars');
var fs = require('fs');

var port = process.env.PORT || 3000;

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var raw = fs.readFileSync('./twitData.json');
var twitData = JSON.parse(raw); 

app.get('/', function (req, res, next) {
  res.status(200).render('newView', {
    data: twitData,
    index:1
  });
});

app.get('/twits/:n', function (req, res){
  var twitId = req.params.twit;
  console.log(twitId);
  var singleTwitArray = [];
  if((twitId >= twitData.length) || (twitId < 0)){ 
    res.status(404).render('error');
  }
  else{ 
    console.log(twitId);
    singleTwitArray.push(twitData[twitId]); 
    res.status(200).render('newView', {data: singleTwitArray, index: 0}); 
  }
});

app.use(express.static('public'));
app.get('*', function (req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});
app.listen(port, function () {
  console.log("== Server is listening on port", port);
});