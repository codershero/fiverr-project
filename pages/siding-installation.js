import React from "react";
import Image from "next/image";
import { Typography, Container, Grid } from "@mui/material";
import OurClients from "../components/OurClients/OurClients";
import Faq from "../components/Faq/Faq";
import TestimonialNew from "../components/TestimonialNew/TestimonialNew";
import Map from "../components/MapComponent/MapComponent";
import Footer from "../components/Footer/Footer";
import styles from "../styles/eachService.module.scss";
import Navbar from "../components/Navbar/Navbar";

import { NextSeo } from "next-seo";

const Siding = () => {
  let faq_data = [
    {
      question: "How long does a siding job take?",
      panel: "panel1",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
    {
      question: "How long does a siding job take?",
      panel: "panel2",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
    {
      question: "How long does a siding job take?",
      panel: "panel3",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
    {
      question: "How long does a siding job take?",
      panel: "panel4",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
  ];
  return (
    <div className={styles.single_service_container}>
      <NextSeo
        title="Siding Installation | Kitchen and Bathroom Remodeling Contractor in Sacramento"
        description="If you want a fresh look for your home, the siding will surely give it a breath of fresh air. There are many types of siding material on the market, it’s always best to take your time to research and find just the right match for your home and taste."
        canonical="https://jcconstruction.us/siding-installation"
      />
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <Image
            src="//images/services/siding/siding.jpg"
            layout="fill"
            objectFit="cover"
            alt="Siding"
            placeholder="blur"
            blurDataURL="/images/services/siding/siding.jpg"
          />
          <div className={styles.overlay}></div>
          <div className={styles.header_content}>
            <Typography variant="h1">Siding Installation</Typography>
            <Typography variant="body1">
              If you're looking for a trusted and experienced siding
              installation company in the Sacramento area, look no further than
              JC Construction and Remodeling. Our team of skilled professionals
              are highly skilled in all aspects of siding installation, from
              vinyl to wood siding. We work closely with our clients to ensure
              that we meet their needs and budget expectations.
            </Typography>
          </div>
        </div>
        <div className={styles.service_header_content}>
          <Typography variant="h2">
            Sacramento's Preferred Home Siding Company
          </Typography>
          <Typography variant="body1">
            At JC Construction and Remodeling, we are experts in all aspects of
            siding installation. Our team of skilled professionals has years of
            experience installing durable and high-quality siding for homes
            across Northern California. Whether you need new siding installed on
            your existing home or a complete exterior makeover for a new
            construction project, we have the experience and expertise to get
            the job done right.
          </Typography>
        </div>
        <div className={styles.service_sec_one}>
          <Typography variant="h2">Home Siding Installation</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <section className={styles.content_sec}>
                <Typography variant="body1">
                  There are many different types of siding available on the
                  market today, and choosing the right option for your home can
                  be a daunting task. Our team will work with you to select the
                  perfect type of siding for your needs and budget, and we will
                  install it with precision and care. We also offer a variety of
                  siding repair and maintenance services to keep your investment
                  looking like new for years to come.
                </Typography>
                <Typography variant="body1">
                  If you are considering a siding installation project for your
                  home, contact JC Construction and Remodeling today. We will be
                  happy to provide you with a free consultation and estimate for
                  our services. Let us help you transform your home with
                  beautiful, durable siding that will last for years to come.
                </Typography>
              </section>
            </Grid>
            <Grid item xs={12} md={6}>
              <section className={styles.image_sec}>
                <div className={styles.image_container}>
                  <Image
                    src={"//images/services/siding/siding1.jpg"}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/images/services/siding/siding1.jpg"
                    alt="service-image"
                  />
                </div>
              </section>
            </Grid>
          </Grid>
        </div>
        {/* <div className={styles.service_sec_two}>
          <Typography variant="h2">siding</Typography>
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
                src={"//images/services/siding/siding2.jpg"}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/images/services/siding/siding2.jpg"
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

export default Siding;
