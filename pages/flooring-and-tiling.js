import React from "react";
import Image from "next/image";
import { Typography, Container, Grid, Link } from "@mui/material";
import PastProject from "../components/PastProject/PastProject";
import OurClients from "../components/OurClients/OurClients";
import Faq from "../components/Faq/Faq";
import TestimonialNew from "../components/TestimonialNew/TestimonialNew";
import Map from "../components/MapComponent/MapComponent";
import Footer from "../components/Footer/Footer";
import styles from "../styles/eachService.module.scss";
import Navbar from "../components/Navbar/Navbar";

import { NextSeo } from "next-seo";

const FlooringAndTiling = () => {
  let faq_data = [
    {
      question: "How long does a flooring and tile job take?",
      panel: "panel1",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
    {
      question: "How long does a flooring and tile job take?",
      panel: "panel2",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
    {
      question: "How long does a flooring and tile job take?",
      panel: "panel3",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
    {
      question: "How long does a flooring and tile job take?",
      panel: "panel4",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
  ];
  return (
    <div className={styles.single_service_container}>
      <NextSeo
        title="Flooring and Tiling - Kitchen and Bathroom Remodeling Contractor in Northern CA"
        description="Upgrade To Flawless Floors SCHEDULE A FLOORING INSTALLATION APPOINTMENT IN THE SACRAMENTO, CA AREA Ready to get rid of your old, dingy floors? Turn to JC Construction & Remodeling for flooring installation services. We replace floors all over Sacramento, CA and surrounding areas. If you want to keep your floors, you can still revamp its appearance"
        canonical="https://jcconstruction.us/flooring-and-tiling/"
      />
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <Image
            src="//images/services/flooring-and-tile/flooring-and-tile.jpg"
            layout="fill"
            objectFit="cover"
            alt="Flooring and Tile"
            placeholder="blur"
            blurDataURL="/images/services/flooring-and-tile/flooring-and-tile.jpg"
          />
          <div className={styles.overlay}></div>
          <div className={styles.header_content}>
            <Typography variant="h1">Flooring and Tiling</Typography>
            <Typography variant="body1">
              Ready to get rid of your old, dingy floors? Turn to JC
              Construction & Remodeling for flooring installation services. We
              replace floors all over Sacramento, CA and surrounding areas.
            </Typography>
          </div>
        </div>
        <div className={styles.service_header_content}>
          <Typography variant="h2">Upgrade To Flawless Floors</Typography>
          <Typography variant="body1">
            If you want to keep your floors, you can still revamp its appearance
            with flooring repairs. Floor refinishing is the perfect way to
            transform dull wooden floors. When we’re done with this simple
            process, your floors will look as shiny and beautiful as the day
            they were installed
          </Typography>
          <Typography variant="body1">
            <Link href="/contact">Call us today</Link> to receive a free
            estimate for your bathroom remodel in Northern CA and surrounding
            areas!
          </Typography>
        </div>
        <div className={styles.service_sec_one}>
          <Typography variant="h2">Flooring and Tile</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <section className={styles.content_sec}>
                <Typography variant="body1">
                  At JC Construction and Remodeling, our craftsmen are highly
                  skilled in all aspects of tile installation, from custom
                  design to expert execution. Whether you're looking for stylish
                  porcelain tiles or durable laminate floors, we offer an
                  extensive selection of premium materials at competitive
                  prices.
                </Typography>
                <Typography variant="body1">
                  Our team of professionals is committed to providing quality
                  flooring and tile solutions that meet the unique needs of your
                  home. We work with you every step of the way to ensure that
                  your renovation project exceeds all expectations. So if you're
                  looking for a trusted contractor for your next flooring or
                  tile project, then look no further.
                </Typography>
                <Typography variant="body1">
                  With over 10 years of experience in the industry, we have the
                  knowledge and expertise to handle all types of flooring and
                  tile projects. Our dedicated team will work closely with you
                  to create custom solutions that perfectly meet your needs and
                  aesthetic vision.
                </Typography>
              </section>
            </Grid>
            <Grid item xs={12} md={6}>
              <section className={styles.image_sec}>
                <div className={styles.image_container}>
                  <Image
                    src={
                      "//images/services/flooring-and-tile/flooringAndTile1.jpg"
                    }
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/images/services/flooring-and-tile/flooringAndTile1.jpg"
                    alt="service-image"
                  />
                </div>
              </section>
            </Grid>
          </Grid>
        </div>
        {/* <div className={styles.service_sec_two}>
          <Typography variant="h2">Flooring and Tile</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            suspendisse aliquet tempor egestas enim. Quisque commodo nunc,
            aenean congue tellus tortor convallis. At ac vitae congue amet.
            Semper porttitor turpis volutpat quis. Vel egestas morbi consequat
            mauris in morbi eu nunc condimentum. Dignissim ac amet dolor, vitae
            quam.
          </Typography>
          <div className={styles.sec_content}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              suspendisse aliquet tempor egestas enim. Quisque commodo nunc,
              aenean congue tellus tortor convallis. At ac vitae congue amet.
              Semper porttitor turpis volutpat quis. Vel egestas morbi consequat
              mauris in morbi eu nunc condimentum. Dignissim ac amet dolor,
              vitae quam.
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              suspendisse aliquet tempor egestas enim. Quisque commodo nunc,
              aenean congue tellus tortor convallis. At ac vitae congue amet.
              Semper porttitor turpis volutpat quis. Vel egestas morbi consequat
              mauris in morbi eu nunc condimentum. Dignissim ac amet dolor,
              vitae quam.
            </Typography>
            <div className={styles.image_container}>
              <Image
                src={"//images/services/flooring-and-tile/flooringAndTile2.jpg"}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/images/services/flooring-and-tile/flooringAndTile2.jpg"
                alt="service-image"
              />
            </div>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              suspendisse aliquet tempor egestas enim. Quisque commodo nunc,
              aenean congue tellus tortor convallis. At ac vitae congue amet.
              Semper porttitor turpis volutpat quis. Vel egestas morbi consequat
              mauris in morbi eu nunc condimentum. Dignissim ac amet dolor,
              vitae quam.
            </Typography>
          </div>
        </div> */}
        <div className={styles.our_client_container}>
          <Typography variant="h2">Sacramento Loves Our Work</Typography>
          <OurClients />
        </div>
        <Faq faq_data={faq_data} />
        <TestimonialNew />
        <Map />
        <Footer />
      </Container>
    </div>
  );
};

export default FlooringAndTiling;
