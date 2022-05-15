import { getServerSideSitemap } from "next-sitemap";
import { sanityClient } from "../../lib/sanity.server";

export const getServerSideProps = async ctx => {
  // Method to source urls from cms
  const postQuery = `*[_type == "blogPosts"]{slug {current}}`;
  const posts = await sanityClient.fetch(postQuery);
  const fields = posts.map(post => ({
    loc: `https://jcconstruction.us/blog/${post.slug.current}`, // Absolute url
    changefreq: "daily",
    priority: 0.7,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default () => {};
