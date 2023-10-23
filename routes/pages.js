require('dotenv').config();
const express = require('express');
const router = express.Router();
const contentfulClient = require('../contentful');

router.get('/:slug', async (req, res) => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'page',
      'fields.slug': req.params.slug,
    });
    const page = response.items[0];
    res.json(page);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch page' });
  }
});

module.exports = router;