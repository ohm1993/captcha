const express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var svgCaptcha = require('svg-captcha');
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));
app.get('/', (req, res) => {
    var captcha = svgCaptcha.create({noise: 8,color: true,background: '#cc9966', ignoreChars: '0o1i'  });
    req.session.captcha = captcha.text;
    console.log("captcha text value is",captcha.text);
    res.type('svg');
    res.status(200).send(captcha.data);
});
app.post('/', (req, res) => {
  if(req.session.captcha == req.body.code){
     res.json({ pass: true});
  }else{
    res.json({ pass: false });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))