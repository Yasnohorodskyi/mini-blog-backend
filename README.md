# Backend for Mini-Blog

This repository contains the backend code for a mini-blog web application. The backend is responsible for handling requests related to pages and posts from the Contentful CMS.

## Project Structure

- **pages.js**: This file defines the routes for retrieving pages based on their slug from the Contentful CMS.

- **posts.js**: This file defines the routes for retrieving posts based on their slug from the Contentful CMS.

- **contentful.js**: This file sets up the connection to the Contentful CMS using the `contentful` library and your environment variables.

## Getting Started

To set up and run the backend:

1. Create a `.env` file in the root directory and add your Contentful Space ID and Access Token:

CONTENTFUL_SPACE_ID=your-space-id
CONTENTFUL_ACCESS_TOKEN=your-access-token

2. Install dependencies:

npm install

3. Start the server:

npm start

4. The server will be running on `http://localhost:3002`.

##API Endpoints

**/api/posts:** Retrieves a posts list.

**/api/posts/:slug:** Retrieves a post by its slug.

**/api/pages/:slug:** Retrieves a page by its slug.

