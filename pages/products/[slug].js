import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Typography, Container, Grid } from "@mui/material";
import ProductItem from "../../components/ProductItem/ProductItem";
import TestimonialNew from "../../components/TestimonialNew/TestimonialNew";
import Map from "../../components/MapComponent/MapComponent";
import Footer from "../../components/Footer/Footer";
import { sanityClient } from "../../lib/sanity.server";
import { urlFor } from "../../lib/sanity";
import styles from "../../styles/prod-detail.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import BlockContent from "@sanity/block-content-to-react";

const ProductDetail = ({ singleProduct, allProducts }) => {
  let [selectedImage, setSelectedImage] = useState(
    urlFor(singleProduct.mainImage.asset._ref).url()
  );
  let [subImage, setSubImage] = useState(singleProduct.productImages);

  useEffect(() => {
    let subImageClone = [];
    singleProduct.productImages &&
      singleProduct.productImages.filter(item => {
        subImageClone.push(item);
      });
    subImageClone.unshift(singleProduct.mainImage);
    setSubImage(subImageClone);
    setSelectedImage(urlFor(singleProduct.mainImage.asset._ref).url());
  }, [singleProduct]);

  return (
    <div className={styles.product_detail_container}>
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.product_detail_content}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <section className={styles.image_sec}>
                <div className={styles.image_container}>
                  <Image
                    src={selectedImage}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={urlFor(
                      singleProduct?.mainImage?.asset?._ref
                    ).url()}
                    alt="blog-image"
                  />
                </div>
              </section>
            </Grid>
            <Grid item xs={12} md={7}>
              <section className={styles.content_sec}>
                <Typography variant="h2">{singleProduct?.title}</Typography>
                <Typography component="small">
                  {singleProduct?.description}
                </Typography>
                <div className={styles.descriptionDetail}>
                  {singleProduct?.descriptionDetail &&
                    singleProduct?.descriptionDetail?.map((item, index) => {
                      if (item._type != "image") {
                        return <BlockContent key={index} blocks={item} />;
                      } else {
                        return (
                          <div
                            className={styles.sanity_img_container}
                            key={index}
                          >
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
                <div className={styles.selection_pics}>
                  {singleProduct.productImages &&
                    subImage.map((image, i) => (
                      <Image
                        src={urlFor(image?.asset?._ref).url()}
                        width={200}
                        height={200}
                        layout="intrinsic"
                        alt={urlFor(image?.asset?._ref).url()}
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={urlFor(image?.asset?._ref).url()}
                        onClick={() => {
                          setSelectedImage(urlFor(image?.asset?._ref).url());
                        }}
                        className={
                          urlFor(image?.asset?._ref).url() === selectedImage
                            ? styles.selected_img
                            : null
                        }
                        key={i}
                      />
                    ))}
                </div>
              </section>
            </Grid>
          </Grid>
        </div>
        <div className={styles.coverImages}>
          {singleProduct.productImages &&
            singleProduct.productImages.map((item, index) => (
              <Image
                src={urlFor(item?.asset?._ref).url()}
                layout="responsive"
                width="100%"
                height="50%"
                objectFit="cover"
                alt={urlFor(item?.asset?._ref).url()}
                blurDataURL={urlFor(item?.asset?._ref).url()}
                placeholder="blur"
                key={index}
              />
            ))}
        </div>
        <div className={styles.recommended_prod_list}>
          <Typography variant="h2">Recomended Products For You</Typography>
          <Grid container spacing={4}>
            {allProducts &&
              allProducts.map((item, i) => {
                return (
                  <Grid item xs={12} md={6} key={i}>
                    <ProductItem
                      title={item.title}
                      description={item.description}
                      img={urlFor(item.mainImage.asset._ref).url()}
                      slug={item.slug.current}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </div>
        <TestimonialNew />
        <Map />
        <Footer />
      </Container>
    </div>
  );
};
// export async function getStaticPaths() {
//   const query = `*[_type == "products"]`;
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
  let { id } = context.params;
  const all_products_query = `*[_type == "products"]`;
  const allProductResponse = await sanityClient.fetch(all_products_query);
  const query = `*[_type == "products" && slug.current == "${context.params.slug}"]`;
  const productResponse = await sanityClient.fetch(query);
  let filteredProducts = allProductResponse.filter(item => {
    return (
      item.category[0].label === productResponse[0].category[0].label &&
      item._id != id
    );
  });

  return {
    props: {
      singleProduct: productResponse[0],
      allProducts: filteredProducts,
    },
  };
}

export default ProductDetail;
