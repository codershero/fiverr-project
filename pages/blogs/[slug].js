import React from "react";
import Image from "next/image";
import { Typography, Container, Grid } from "@mui/material";
import BlockContent from "@sanity/block-content-to-react";
import TestimonialNew from "../../components/TestimonialNew/TestimonialNew";
import Map from "../../components/MapComponent/MapComponent";
import Footer from "../../components/Footer/Footer";
import { sanityClient } from "../../lib/sanity.server";
import { urlFor } from "../../lib/sanity";
import styles from "../../styles/blog-detail.module.scss";
import Navbar from "../../components/Navbar/Navbar";

const BlogDetail = ({ blog }) => {
  const serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };
  return (
    <div className={styles.blog_detail_container}>
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.header_container}>
          <Typography variant="h1">{blog?.title}</Typography>
        </div>
        <div className={styles.author_details}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <section className={styles.image_sec}>
                <div className={styles.img_container}>
                  <Image
                    src={
                      blog?.mainImage && urlFor(blog.mainImage.asset._ref).url()
                    }
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={
                      blog?.mainImage && urlFor(blog.mainImage.asset._ref).url()
                    }
                    alt="author-image"
                  />
                </div>
              </section>
            </Grid>
            <Grid item xs={12} md={5}>
              <section className={styles.content_sec}>
                <Typography variant="body1">
                  <b>{blog?.author}</b>
                </Typography>
                <Typography variant="body1">{blog?.excerpt}</Typography>
              </section>
            </Grid>
          </Grid>
        </div>
        <div className={styles.blog_content}>
          <div className={styles.blog_sanity_content}>
            {blog?.text &&
              blog?.text?.map((item, index) => {
                if (item._type != "image") {
                  return (
                    <BlockContent
                      key={index}
                      blocks={item}
                      serializers={serializers}
                    />
                  );
                } else {
                  return (
                    <div className={styles.sanity_img_container} key={index}>
                      <Image
                        src={urlFor(item.asset._ref).url()}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={urlFor(item.asset._ref).url()}
                        alt="sanity-image"
                      />
                    </div>
                  );
                }
              })}
          </div>
        </div>
        <TestimonialNew />
        <Map />
        <Footer />
      </Container>
    </div>
  );
};

// export async function getStaticPaths() {
//   const query = `*[_type == "blogPosts"]`;
//   const blog = await sanityClient.fetch(query);
//   let paths = [];
//   blog.map(item => {
//     paths.push({ params: { slug: item.slug.current } });
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps(context) {
  let { params } = context;
  const postQuery = `*[_type == "blogPosts" && slug.current == "${params.slug}"]`;
  const blog = await sanityClient.fetch(postQuery);
  return {
    props: {
      blog: blog[0],
    },
  };
}

export default BlogDetail;
