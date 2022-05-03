
const express = require('express')
const fs = require('fs')
const ejs = require('ejs')


const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {fullname:``});
       
});

app.post('/', (req, res) => {
    res.render('index', {fullname:`The name submitted was ${req.body.fname} ${req.body.lname}`});
    console.log(req.body)
    //console.log(`The name being submitted is ${req.body.fname} ${req.body.lname}.`);
    }
    
);

app.get('/data', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify({'name':'Marc'}))
    
})
app.listen(3003, () => {
    console.log('Server running on port 3003')
})