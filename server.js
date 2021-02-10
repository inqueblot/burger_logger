const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./controllers/burger_controller');

var PORT = process.env.PORT || 3001;

app = express();
app.use(router);

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});