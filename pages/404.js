import React from "react";
import styles from "../styles/thank-you.module.scss";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Container, Typography } from "@mui/material";
import { OutlineButton } from "../components/Buttons/Buttons";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <Image
            src="/images/errorPage.jpg"
            layout="fill"
            objectFit="cover"
            alt="hero image"
            placeholder="blur"
            blurDataURL="/images/errorPage.jpg"
          />
          <div className={styles.overlay}></div>
          <div className={styles.header_content}>
            <Typography style={{ marginBottom: "2rem" }} variant="h1">
              Sorry this page does not exist
            </Typography>
            <Link href="/">
              <OutlineButton islight="true" circled="true">
                Return Home
              </OutlineButton>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ErrorPage;
