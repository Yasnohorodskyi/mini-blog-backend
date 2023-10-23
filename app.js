const express = require('express');
const cors = require('cors');
const { json } = require('micro');
const { send } = require('micro');
const { URL } = require('url');

const postsHandler = require('./src/routes/posts');
const pagesHandler = require('./src/routes/pages');

const app = express();
const port = 3002;

app.use(json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/api/posts', async (req, res) => {
  try {
    const { pathname } = new URL(req.url, 'http://localhost');

    if (pathname === '/api/posts') {
      await postsHandler(req, res);
    } else {
      send(res, 404, 'Not Found');
    }
  } catch (error) {
    console.error(error);
    send(res, 500, 'Failed to fetch posts');
  }
});

app.get('/api/pages', async (req, res) => {
  try {
    const { pathname } = new URL(req.url, 'http://localhost');

    if (pathname === '/api/pages') {
      await pagesHandler(req, res);
    } else {
      send(res, 404, 'Not Found');
    }
  } catch (error) {
    console.error(error);
    send(res, 500, 'Failed to fetch pages');
  }
});

module.exports = app;
