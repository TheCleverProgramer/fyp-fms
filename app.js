const express = require('express'),
      bodyparser = require('body-parser'),
      mongoose = require('mongoose'),
      app = express();

mongoose.connect('mongodb://localhost/FMS');

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));


app.get('/', (req, res)=>{
    res.send('Hello World!');
});

app.listen(process.env.PORT || 5000, process.env.IP || 'localhost', ()=>{
    console.log(`[+] FMS server running on port ${process.env.PORT? process.env.PORT: 5000}`);
});

