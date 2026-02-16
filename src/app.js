const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths fpr express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// setup handelbars engine and views ocation
app.set('views', viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Harshil'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Harshil',
        helpText: 'This is the help page'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Harshil'
    });
});

app.get('/help/*splat', (req,res) => {
    res.render('404', {
        title: '404',
        name: 'Harshil',
        errMsg: 'Help article not found'
    })
})

app.get('/*splat', (req,res) => {
    res.render('404', {
        title: '404',
        name: 'Harshil',
        errMsg: 'Page not found'
    })
})

app.get('weather', (req, res) => {
    res.send('weather')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})