const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mealSuggestionsRouter = require('./routes/mealSuggestions');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/meal-suggestions', mealSuggestionsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
