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

const CustomBathroomRemodeling = () => {
  let faq_data = [
    {
      question: "How long does a bathroom remodeling job take?",
      panel: "panel1",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
    {
      question: "How long does a bathroom remodeling job take?",
      panel: "panel2",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
    {
      question: "How long does a bathroom remodeling job take?",
      panel: "panel3",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
    {
      question: "How long does a bathroom remodeling job take?",
      panel: "panel4",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
  ];
  return (
    <div className={styles.single_service_container}>
      <NextSeo
        title="Custom Bathroom Remodels - Bathroom and Kitchen Remodeling Contractor in Northern CA"
        description="Custom Bathroom Remodeling Services BRING THE SPA EXPERIENCE HOME! UPGRADE YOUR BATHROOM TODAY! If your bathrooms are outdated or simply in need a fresh new look, call JC Construction and Remodeling for a bathroom remodel. We’ll design a bathroom you’ll be proud to show off! Our experienced contractors and designers will handle everything from design to finish"
        canonical="https://jcconstruction.us/custom-bathroom-remodels/"
      />
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <Image
            src="//images/services/bathroom-remodel/bathroom-remodeling.jpg"
            layout="fill"
            objectFit="cover"
            alt="hero image"
            placeholder="blur"
            blurDataURL="/images/services/bathroom-remodel/bathroom-remodeling.jpg"
          />
          <div className={styles.overlay}></div>
          <div className={styles.header_content}>
            <Typography variant="h1">Custom bathroom Remodels</Typography>
            <Typography variant="body1">
              Looking to upgrade your bathroom with a custom design? JC
              Construction and Remodeling is here to help. We’re experts in all
              aspects of bathroom remodeling, from simple makeovers to complete
              gut jobs. Whether you’re looking for a luxurious master bath or a
              more functional family-friendly space, we can design and build it
              for you.
            </Typography>
          </div>
        </div>
        <div className={styles.service_header_content}>
          <Typography variant="h2">
            Custom Bathroom Remodel Sacramento
          </Typography>
          <Typography variant="body1">
            If your bathrooms are outdated or simply in need a fresh new look,
            call JC Construction and Remodeling for a bathroom remodel. We’ll
            design a bathroom you’ll be proud to show off! Our experienced
            contractors and designers will handle everything from design to
            completion.
          </Typography>
          <Typography variant="body1">
            <Link href="/contact">Call us today</Link> to receive a free
            estimate for your bathroom remodel in Northern CA and surrounding
            areas!
          </Typography>
        </div>
        <div className={styles.service_sec_one}>
          <Typography variant="h2">
            The Possibilities of Your Custom Bathroom Are Endless!
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <section className={styles.content_sec}>
                <Typography variant="body1">
                  You’ll want to spend all of your free time relaxing in your
                  tub or shower. When it comes to your bathroom, we’ll give it a
                  complete makeover, including:
                </Typography>
                <ul>
                  <li>Texture Tile Floor & Back Splash Installation</li>
                  <li>Tile Back Splash Installation</li>
                  <li>Sinks, Faucets, & Fixture Installation</li>
                  <li>Walk-In Shower Installation</li>
                  <li>Bathroom Vanity & Cabinet Installation</li>
                </ul>
                <Typography variant="body1">
                  With a team of talented designers and professional builders,
                  we can make your dreams come true. We’ll work with you every
                  step of the way to ensure that the final result is everything
                  you wanted it to be. Choose from a wide range of special
                  features such as soaking tubs, stand-alone showers, tiling,
                  storage units, and more.
                </Typography>
                <Typography variant="body1">
                  We stand behind our work and offer a full satisfaction
                  guarantee, so you can be confident that your custom bathroom
                  will look and function exactly how you want it to.
                </Typography>
              </section>
            </Grid>
            <Grid item xs={12} md={6}>
              <section className={styles.image_sec}>
                <div className={styles.image_container}>
                  <Image
                    src={"//images/services/bathroom-remodel/remodeling1.jpg"}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/images/services/bathroom-remodel/remodeling1.jpg"
                    alt="service-image"
                  />
                </div>
              </section>
            </Grid>
          </Grid>
        </div>
        {/* <div className={styles.service_sec_two}>
          <Typography variant="h2">Remodeling bathrooms</Typography>
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
                src={"//images/services/bathroom-remodel/remodeling2.jpg"}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/images/services/bathroom-remodel/remodeling2.jpg"
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
              src="/images/portfolio_1.png"
              objectFit="cover"
              objectPosition="center"
              layout="fill"
              placeholder="blur"
              blurDataURL="/images/portfolio_1.png"
              alt="portfolio_1.png"
            />
            <div className={styles.cardContent}>
              <Typography variant="h2">
                Bathroom Remodeling Portfolio
              </Typography>
              <Link href="/portfolio/bathroom-remodeling-portfolio">
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

export default CustomBathroomRemodeling;
