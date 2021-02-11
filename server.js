const express = require('express');

var PORT = process.env.PORT || 3001;

var app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require('./controllers/burger_controller');

app.use(routes);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT)
});
// -------------------------------------------------------------------
// const express = require('express');
// const exphbs = require('express-handlebars');
// const routes = require('./controllers/burger_controller');

// var PORT = process.env.PORT || 3001;

// var app = express();

// app.use(routes);



// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// app.listen(PORT, function () {
//     console.log("App now listening at localhost:" + PORT);
// });
