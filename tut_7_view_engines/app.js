//A view engine is a component of web frameworks, like Express.js
const express = require('express');

// express app
const app = express();

// register view engine
// app.set('views',__dirname+"/views")
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p> home page </p>');
    // res.sendfile('./views/index.html', {root: __dirname});
    const name = 'Blog Ninja';
    const blogs = [
        { title: ' this is title 1', snippet: 'this is snippet 1' },
        { title: ' this is title 2', snippet: 'this is snippet 2' },
        { title: ' this is title 3', snippet: 'this is snippet 3' }
    ]
    res.render('index', {title: 'Home', blogs: blogs,name:name});
});

app.get('/about', (req, res) => {
    const name = 'Blog Ninja';
    // res.send('<p> about page </p>');
    // res.sendfile('./views/about.html', {root: __dirname});
    res.render('about', { title: 'About' , name:name});
});

// redirects   
// app.get('/about-us', (req,res) => {
//     res.redirect('/about');
// });

app.get('/blogs/create', (req, res) => {
    const name = 'Blog Ninja';
    res.render('create', { title: 'Create a new blog' , name:name});
});

// 404 page , this should be at bottom, to use above properties
app.use((req, res) => { // use works for invalid link
    // res.status(404).sendfile('./views/404.html', {root: __dirname});
    const name = 'Blog Ninja';
    res.status(404).render('404', { title: '404' ,name:name});
});  
