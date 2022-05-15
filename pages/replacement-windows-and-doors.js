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

import { NextSeo } from "next-seo";

const WindowsAndDoors = () => {
  let faq_data = [
    {
      question: "How long does a windows and doors job take?",
      panel: "panel1",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
    {
      question: "How long does a windows and doors job take?",
      panel: "panel2",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
    {
      question: "How long does a windows and doors job take?",
      panel: "panel3",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
    {
      question: "How long does a windows and doors job take?",
      panel: "panel4",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam id enim, eget vitae tellus pulvinar. Sagittis ultricies quisque at a tempor nulla amet orci.",
    },
  ];
  return (
    <div className={styles.single_service_container}>
      <NextSeo
        title="Replacement Windows and Doors in Northern CA"
        description="Replacement Windows and Doors in Northern CA | 916-886-7113 is it time to replace your windoes and doors?"
        canonical="https://jcconstruction.us/replacement-windows-and-doors"
      />
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <Image
            src="//images/services/windows-and-doors/windows-and-doors.jpg"
            layout="fill"
            objectFit="cover"
            alt="Windows and Doors"
            placeholder="blur"
            blurDataURL="/images/services/windows-and-doors/windows-and-doors.jpg"
          />
          <div className={styles.overlay}></div>
          <div className={styles.header_content}>
            <Typography variant="h1">
              Replacement Windows and Doors Sacramento
            </Typography>
            <Typography variant="body1">
              No doubt that windows and doors play a crucial role in the overall
              look, feel and comfort of your home. Not only do they impact its
              curb appeal, but they also affect energy efficiency and security.
              When it's time to replace your windows and doors, JC Construction
              and Remodeling is here to help.
            </Typography>
          </div>
        </div>
        <div className={styles.service_header_content}>
          <Typography variant="h2">Replacement Windows and Doors</Typography>
          <Typography variant="body1">
            Is it time to replace your windows and doors? If the doors are too
            drafty and don’t have enough light coming and cracks, it is time to
            replace your door and windows. New windows and doors can undoubtedly
            give your home a new look and revitalize it. You need to learn about
            the different types of windows and doors, window parts, materials
            used when you decide to replace them. Replacing new doors and
            windows can change how the light, sound, and fresh air move in and
            out of your home. It will completely reshape the home vibe, feel,
            and even the smell.
          </Typography>
        </div>
        <div className={styles.service_sec_one}>
          <Typography variant="h2">Windows and doors</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <section className={styles.content_sec}>
                <Typography variant="body1">
                  When deciding to renovate your windows, remember some of the
                  following pointers to help make the process easier.
                </Typography>
                <Typography variant="body1">
                  Consider and figure out the design and style you want and the
                  time you want to keep the window in its best shape as some
                  need more maintenance or even maintenance-free.
                </Typography>
                <Typography variant="body1">
                  Materials you select for your windows and doors, either wood,
                  clad aluminum, or vinyl. Different materials have their own
                  pros and cons; wood is a beautiful material but can warp over
                  time and is prone to rotting by wood-boring insects, and it’s
                  expensive. While clad is a wood frame window coated with
                  aluminum, vinyl, or fiberglass, it typically stands out to the
                  element and doesn’t require painting. Aluminum is lightweight,
                  rust and mildew-free, liked by the architect for the clean
                  lines and thin frames that gives a more open. Vinyl is the
                  most popular window material. They are known for their
                  durability and moisture-resistant feature, which is excellent
                  for coastal and humid climates. Also, vinyl is easily
                  maintained.
                </Typography>
              </section>
            </Grid>
            <Grid item xs={12} md={6}>
              <section className={styles.image_sec}>
                <div className={styles.image_container}>
                  <Image
                    src={
                      "//images/services/windows-and-doors/windows-and-doors1.jpg"
                    }
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/images/services/windows-and-doors/windows-and-doors1.jpg"
                    alt="service-image"
                  />
                </div>
              </section>
            </Grid>
          </Grid>
        </div>
        {/* <div className={styles.service_sec_two}>
          <Typography variant="h2">windows and doors</Typography>
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
                src={
                  "//images/services/windows-and-doors/windows-and-doors2.jpg"
                }
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/images/services/windows-and-doors/windows-and-doors2.jpg"
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

export default WindowsAndDoors;
