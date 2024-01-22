const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Routes
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');

app.get('/', homeController.home);
app.get('/users', userController.users);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
