import React from "react";
import styles from "../styles/thank-you.module.scss";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import TestimonialNew from "../components/TestimonialNew/TestimonialNew";
import Map from "../components/MapComponent/MapComponent";
import Footer from "../components/Footer/Footer";
import { Container, Typography } from "@mui/material";
import { OutlineButton } from "../components/Buttons/Buttons";
import Link from "next/link";

const ThankYou = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <Image
            src="/images/thank_you_bg.png"
            layout="fill"
            objectFit="cover"
            alt="hero image"
            placeholder="blur"
            blurDataURL="/images/thank_you_bg.png"
          />
          <div className={styles.overlay}></div>
          <div className={styles.header_content}>
            <Typography variant="h1">
              Thank You For Putting Your Trust In Us!
            </Typography>
            <Typography variant="body1">
              We look forward to helping you on your next project! We will be in
              touch as soon as we can.{" "}
            </Typography>
            <Link href="/">
              <OutlineButton islight="true" circled="true">
                Return Home
              </OutlineButton>
            </Link>
          </div>
        </div>
        <TestimonialNew />
        <Map />
        <Footer />
      </Container>
    </div>
  );
};

export default ThankYou;
