// import { createClient } from "contentful";
import React from 'react';

const EXTERNAL_DATA_URL = 'https://growithurl.com/blogs';

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${
        posts
          .map(({ fields }) => {
            return `
                    <url>
                        <loc>https://book.jasneet.codes</loc>
                    </url>
                    <url>
                        <loc>https://book.jasneet.codes/checkout</loc>
                    </url>
                `;
          })
          .join('')}
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    // const client = createClient({
    //     space: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    // });
    
    // const blogs = await client.getEntries({ content_type: "blog" });

    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap({}));
    res.end();
  }
}

export default Sitemap;