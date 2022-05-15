import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Typography, Container, Grid } from "@mui/material";
import TestimonialNew from "../../components/TestimonialNew/TestimonialNew";
import Map from "../../components/MapComponent/MapComponent";
import Footer from "../../components/Footer/Footer";
import { styled } from "@mui/material/styles";
import MuiSelect from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { sanityClient } from "../../lib/sanity.server";
import { urlFor } from "../../lib/sanity";
import styles from "../../styles/products.module.scss";
import Navbar from "../../components/Navbar/Navbar";
const ProductItem = dynamic(() =>
  import("../../components/ProductItem/ProductItem")
);

const types_data = [
  "Cabinets",
  "Sinks",
  "Shower Head Systems",
  "Free Standing Tubs"
];

const HomeRemodelingProducts = ({ products }) => {
  const [type, setType] = useState("0");
  const [prodductList, setProdductList] = useState(products);

  useEffect(() => {
    if (type !== "0") {
      let filteredProds = products.filter(
        (item) => item.category[0].label === type
      );
      setProdductList([...filteredProds]);
    }
  }, [type, products]);

  useEffect(() => {
    let selectedType = localStorage.getItem("prod_type");
    if (selectedType) {
      setType(selectedType);
    }
  }, []);

  const Select = styled(MuiSelect)((props) => ({
    width: 368,
    border: "2px solid #070707",
    background: "tranparent",
    fontWeight: 700,
    color: "#070707",
    textAlign: "center",
    borderRadius: "40px"
  }));

  return (
    <div className={styles.showroom_container}>
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <Image
            src="/images/showroom_hero.png"
            layout="fill"
            objectFit="cover"
            alt="hero image"
            placeholder="blur"
            blurDataURL="/images/showroom_hero.png"
          />
          <div className={styles.header_content}>
            <Typography variant="h1">Shop Products & Upgrades</Typography>
            <Typography variant="body1">
              Looking for a way to upgrade your home without breaking the bank?
              Check out JC Construction and Remodeling{"'"}s for products and
              upgrades. From kitchen and bathroom remodeling to room additions,
              we have everything you need to make your house a home. With our
              competitive prices and top-rated quality, you can{"'"}t go wrong.
            </Typography>
          </div>
        </div>
        <div className={styles.filter_container}>
          <Select
            value={type}
            onChange={(e) => {
              localStorage.setItem("prod_type", e.target.value);
              setType(e.target.value);
            }}
          >
            <MenuItem selected disabled value="0">
              Select Categorgy
            </MenuItem>
            {types_data.map((item, i) => (
              <MenuItem key={i} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className={styles.product_list_container}>
          <Grid container spacing={4}>
            {prodductList &&
              prodductList.map((item, i) => {
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

export async function getStaticProps() {
  const query = `*[_type == "products"] | order(order asc)`;
  const products = await sanityClient.fetch(query);
  return {
    props: {
      products,
    },
    revalidate: 300,
  };
}

export default HomeRemodelingProducts;
