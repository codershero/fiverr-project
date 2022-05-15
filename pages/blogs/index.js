import Image from "next/image";
import dynamic from "next/dynamic";
import { Typography, Container } from "@mui/material";
import TestimonialNew from "../../components/TestimonialNew/TestimonialNew";
import Map from "../../components/MapComponent/MapComponent";
import Footer from "../../components/Footer/Footer";
import { sanityClient } from "../../lib/sanity.server";
import { urlFor } from "../../lib/sanity";
import styles from "../../styles/blogs.module.scss";
import Navbar from "../../components/Navbar/Navbar";
const Blog = dynamic(() => import("../../components/Blog/Blog"));

const Blogs = ({ blogs }) => {
  return (
    <div className={styles.blogs_container}>
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <Image
            src="/images/blog_header.png"
            layout="fill"
            objectFit="cover"
            alt="hero image"
            placeholder="blur"
            blurDataURL="/images/blog_header.png"
          />
          <div className={styles.overlay}></div>
          <div className={styles.header_content}>
            <Typography variant="h1">
              New Construction & Remodeling Guide
            </Typography>
            <Typography variant="body1">
              We dedicated this blog to helping homeowners in Northern
              California improve their homes. Topics will include kitchen and
              bathroom remodeling, home additions, and more. We{"'"}ll provide
              tips, tricks, and advice to help you get the most out of your home
              improvement project.
            </Typography>
          </div>
        </div>
        <div className={styles.blogs_container}>
          <div className={styles.blog_list_container}>
            {blogs &&
              blogs.map((item, i) => (
                <Blog
                  img={
                    item.mainImage && urlFor(item?.mainImage?.asset?._ref).url()
                  }
                  title={item.title}
                  description={item.excerpt}
                  author={item.author}
                  slug={item.slug.current}
                  key={i}
                />
              ))}
          </div>
        </div>
        <TestimonialNew />
        <Map />
        <Footer />
      </Container>
    </div>
  );
};
export async function getStaticProps() {
  const query = `*[_type == "blogPosts"]`;
  let blogs = await sanityClient.fetch(query);
  return {
    props: {
      blogs,
    },
    revalidate: 300,
  };
}

export default Blogs;
