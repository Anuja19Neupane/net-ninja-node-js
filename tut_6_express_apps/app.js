const express = require ('express');

// express app
const app = express ();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p> home page </p>');
    res.sendfile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    // res.send('<p> about page </p>');
    res.sendfile('./views/about.html', {root: __dirname});
});

// redirects   
app.get('/about-us', (req,res) => {
    res.redirect('/about');
});

// 404 page , this should be at bottom, to use above properties
app.use((req,res) => { // use works for invalid link
    res.status(404).sendfile('./views/404.html', {root: __dirname});
})