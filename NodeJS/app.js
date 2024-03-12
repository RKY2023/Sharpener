const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const loginRoutes = require('./routes/login');
const contactUsRoutes = require('./routes/contactus');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
// app.use(loginRoutes);
app.use(contactUsRoutes);

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page not found</h1>');
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
// features in work experience min 3 
// skills
// fill space 
// summary 4 lines

