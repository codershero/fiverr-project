import React from "react";
import Image from "next/image";
import { Typography, Container, Grid, Link } from "@mui/material";
import OurClients from "../components/OurClients/OurClients";
import Faq from "../components/Faq/Faq";
import TestimonialNew from "../components/TestimonialNew/TestimonialNew";
import Map from "../components/MapComponent/MapComponent";
import Footer from "../components/Footer/Footer";
import styles from "../styles/eachService.module.scss";
import Navbar from "../components/Navbar/Navbar";

import { OutlineButton } from "../components/Buttons/Buttons";
import { NextSeo } from "next-seo";

const CustomKitchenRemodeling = () => {
  let faq_data = [
    {
      question: "How long does a kitchen remodeling job take?",
      panel: "panel1",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
    {
      question: "How long does a kitchen remodeling job take?",
      panel: "panel2",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
    {
      question: "How long does a kitchen remodeling job take?",
      panel: "panel3",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
    {
      question: "How long does a kitchen remodeling job take?",
      panel: "panel4",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
  ];
  return (
    <div className={styles.single_service_container}>
      <NextSeo
        title="Custom Kitchen Remodels - Bathroom and Kitchen Remodeling Contractor in Northern CA"
        description="Custom Kitchen Remodeling Services UPGRADE YOUR KITCHEN TODAY! If your Kitchen are outdated or simply in need a fresh new look, call JC Construction and Remodeling for a Kitchen remodel. We’ll design a bathroom you’ll be proud to show off! Our experienced contractors and designers will handle everything from design to finish"
        canonical="https://jcconstruction.us/custom-kitchen-remodels/"
      />
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <Image
            src="//images/services/kitchen-remodel/kitchen-remodeling.png"
            layout="fill"
            objectFit="cover"
            alt="Kitchen Remodeling Service"
            placeholder="blur"
            blurDataURL="/images/services/kitchen-remodel/kitchen-remodeling.png"
          />
          <div className={styles.header_content}>
            <Typography variant="h1">Custom kitchen Remodeling</Typography>
            <Typography variant="body1">
              JC Construction and Remodeling is a top-rated general contractor
              in Northern California. We specialize in kitchen remodeling and
              can work with you to create a custom kitchen that suits your needs
              and budget. Our highly skilled team is experienced in all aspects
              of kitchen remodeling.
            </Typography>
          </div>
        </div>
        <div className={styles.service_header_content}>
          <Typography variant="h2">
            Is Your Kitchen Leaving a Bad Taste in Your Mouth? Spice up Your
            Home and Upgrade Your Kitchen Today!
          </Typography>
          <Typography variant="body1">
            Do you have an idea in mind for your perfect kitchen? Your dream
            cooking and dining space is within reach. JC Construction and
            Remodeling offers high-end kitchen renovations that fit every
            budget. Whether you have a design ready or want to start from the
            beginning, our remodeling experts can make it happen!
          </Typography>
          <Typography variant="body1">
            <Link href="/contact">Call us today</Link> to receive a free
            estimate for your kitchen remodel in Northern CA and surrounding
            areas!
          </Typography>
        </div>
        <div className={styles.service_sec_one}>
          <Typography variant="h2">
            Our Experts Specialize in Upscale Kitchen Remodeling Projects
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <section className={styles.content_sec}>
                <Typography variant="body1">
                  When it comes to your kitchen, we’ll give it a complete
                  makeover, including:
                </Typography>
                <ul>
                  <li>Texture Tile Floor & Back Splash Installation</li>
                  <li>Tile Back Splash Installation</li>
                  <li>Sinks, Faucets, & Fixture Installation</li>
                  <li>Walk-In Shower Installation</li>
                  <li>Bathroom Vanity & Cabinet Installation</li>
                </ul>
                <Typography variant="body1">
                  At JC Construction and Remodeling, we are proud to be one of
                  Northern California's top general contractors for custom
                  kitchen remodeling projects. Our team of highly skilled
                  experts has years of experience in all aspects of residential
                  remodeling, including kitchens and bathrooms, as well as room
                  additions.
                </Typography>
                <Typography variant="body1">
                  Whether you're looking for a simple refresh or a complete
                  custom kitchen remodel, we will work with you to create a
                  space that is both functional and aesthetically pleasing. We
                  understand the importance of having a kitchen that meets your
                  specific needs and taste, which is why we offer a wide range
                  of custom options to choose from.
                </Typography>
              </section>
            </Grid>
            <Grid item xs={12} md={6}>
              <section className={styles.image_sec}>
                <div className={styles.image_container}>
                  <Image
                    src={"//images/services/kitchen-remodel/remodeling1.jpg"}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/images/services/kitchen-remodel/remodeling1.jpg"
                    alt="service-image"
                  />
                </div>
              </section>
            </Grid>
          </Grid>
        </div>
        {/* <div className={styles.service_sec_two}>
          <Typography variant="h2">Remodeling kitchens</Typography>
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
                src={"//images/services/kitchen-remodel/remodeling2.jpg"}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/images/services/kitchen-remodel/remodeling2.jpg"
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
        <div className={styles.past_project}>
          <div className={styles.card}>
            <Image
              src="/images/portfolio_2.png"
              objectFit="cover"
              objectPosition="center"
              layout="fill"
              placeholder="blur"
              blurDataURL="/images/portfolio_2.png"
              alt="portfolio_1.png"
            />
            <div className={styles.cardContent}>
              <Typography variant="h2">Kitchen Remodeling Portfolio</Typography>
              <Link href="/portfolio/kitchen-remodeling-portfolio">
                <OutlineButton islight="true" circled="true">
                  View Post Jobs
                </OutlineButton>
              </Link>
            </div>
          </div>
        </div>
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

export default CustomKitchenRemodeling;
