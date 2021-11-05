const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs'); //allows for ejs to be used; must have a views directory which stores the ejs files
app.set('views', path.join(__dirname, '/views')); //allows you to start the server outside of the dir that contains 'views'

app.get('/', (req, res) => {
    res.render('home') //render method responds with the ejs file to be displayed for the '/' path
})

app.get('/rand', (req, res) => {
    const num = Math.floor((Math.random() * 10)+1)
    res.render('random', {num}); //this object is passed into random.ejs and num var is available to be used as rand
})

app.listen('3000', () => { //sets the server to listen on port 3000
    console.log('listening on 3000');
})