require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.use('/api/posts', require('./routes/posts'));
app.use('/api/pages', require('./routes/pages'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
