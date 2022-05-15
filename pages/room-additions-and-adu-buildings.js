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

const RoomAdditions = () => {
  let faq_data = [
    {
      question: "How long does a room additions job take?",
      panel: "panel1",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
    {
      question: "How long does a room additions job take?",
      panel: "panel2",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
    {
      question: "How long does a room additions job take?",
      panel: "panel3",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
    {
      question: "How long does a room additions job take?",
      panel: "panel4",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
  ];
  return (
    <div className={styles.single_service_container}>
      <NextSeo
        title="Room Additions and ADU Buildings | Kitchen and Bathroom Remodeling Contractor in Sacramento"
        description="Room Additions and ADU Buildings - Kitchen and Bathroom Remodeling Contractor in Northern CA | JC Construction"
        canonical="https://jcconstruction.us/room-additions-and-adu-buildings"
      />
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <Image
            src="//images/services/room-additions/room-additions.jpg"
            layout="fill"
            objectFit="cover"
            alt="hero image"
            placeholder="blur"
            blurDataURL="/images/services/room-additions/room-additions.jpg"
          />
          <div className={styles.overlay}></div>
          <div className={styles.header_content}>
            <Typography variant="h1">
              Room Additions and Adu Buildings
            </Typography>
            <Typography variant="body1">
              At JC Construction and Remodeling, we are highly skilled in all
              aspects of room additions and adu buildings, from planning and
              design through construction and finishing work. Our team of
              experts has the experience needed to ensure that your new addition
              or adu building is completed to the highest standards, on time and
              on budget.
            </Typography>
          </div>
        </div>
        <div className={styles.service_header_content}>
          <Typography variant="h2">Sacramento Adu Builders</Typography>
          <Typography variant="body1">
            We have over 10 years of experience in the Sacramento area and have
            worked on a variety of projects, big and small. We're dedicated to
            quality workmanship and customer satisfaction, and we'll work with
            you to make sure your vision becomes a reality. Whether you're
            looking to add an extra room, expand your kitchen, or build a
            mother-in-law unit, we can help. We'll work with you to design and
            build the perfect addition for your needs.
          </Typography>
        </div>
        <div className={styles.service_sec_one}>
          <Typography variant="h2">Home Additions in Sacramento</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <section className={styles.content_sec}>
                <Typography variant="body1">
                  Home additions are a great way to increase the value of your
                  home. JC Construction Sacramento specializes in building home
                  additions, including room additions and Adu buildings. As
                  Sacramento adu builders , we have the expertise and experience
                  necessary to deliver high-quality work that will perfectly
                  complement your home.
                </Typography>
                <Typography variant="body1">
                  Whether you are looking for more space for your growing family
                  or want to add a home office, our experienced team can help.
                  We offer a full range of services, from design and planning to
                  construction and finishing touches. No matter what kind of
                  home addition you are looking for, we can help make your
                  vision a reality.
                </Typography>
                <Typography variant="body1">
                  So if you are looking for adu builders in Sacramento, look no
                  further than JC Construction. Contact us today to learn more
                  about our services and get started on building the home of
                  your dreams!
                </Typography>
              </section>
            </Grid>
            <Grid item xs={12} md={6}>
              <section className={styles.image_sec}>
                <div className={styles.image_container}>
                  <Image
                    src={"//images/services/room-additions/room-additions1.jpg"}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/images/services/room-additions/room-additions1.jpg"
                    alt="service-image"
                  />
                </div>
              </section>
            </Grid>
          </Grid>
        </div>
        {/* <div className={styles.service_sec_two}>
          <Typography variant="h2">room additions</Typography>
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
                src={"//images/services/room-additions/room-additions2.jpg"}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/images/services/room-additions/room-additions2.jpg"
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

export default RoomAdditions;
