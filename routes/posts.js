require('dotenv').config();
const express = require('express');
const router = express.Router();
const contentfulClient = require('../contentful');

router.get('/', async (req, res) => {
  try {
    const response = await contentfulClient.getEntries({ content_type: 'blogPost' });
    const posts = response.items;
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      'fields.slug': req.params.slug,
    });
    const post = response.items[0];
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch post' });
  }
});

module.exports = router;