const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./config/connnection');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// Routes
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');
const reactionRoutes = require('./routes/reactionRoutes');
const friendRoutes = require('./routes/friendRoutes');


app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/reactions', reactionRoutes);
app.use('/api/friends', friendRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
