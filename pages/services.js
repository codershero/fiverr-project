import React from "react";
import dynamic from "next/dynamic";
import { Typography, Container } from "@mui/material";
import TestimonialNew from "../components/TestimonialNew/TestimonialNew";
import Map from "../components/MapComponent/MapComponent";
import Footer from "../components/Footer/Footer";
import styles from "../styles/services.module.scss";
import Navbar from "../components/Navbar/Navbar";
const Services = dynamic(() => import("../components/Services/Services"));

const ServicePage = () => {
  return (
    <div className={styles.services_container}>
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <div className={styles.header_content}>
            <Typography variant="h1">
              Sacramento Construction & Remodeling Services
            </Typography>
            <Typography variant="body1">
              If you{"'"}re considering any type of construction or home
              remodeling project in the Sacramento area, JC Construction &
              Remodeling should be your first call. We are a top-rated general
              contractor with years of experience and a proven track record of
              success. We specialize in all aspects of residential construction
              and remodeling, including kitchens, bathrooms, flooring, tile,
              windows, doors, sidings and even room additions.
            </Typography>
          </div>
        </div>
        <div className={styles.service_list_container}>
          <Services />
          <Typography variant="body1">
            No matter what type of project you have in mind, we are confident
            that we can exceed your expectations. We understand that
            construction projects can be disruptive, so we go the extra mile to
            make sure that your experience is as smooth and stress-free as
            possible. If you{"'"}re ready to take your home to the next level,
            contact JC Construction & Remodeling today. We{"'"}ll be happy to
            provide you with a free consultation and estimate. Let us show you
            what we can do!
          </Typography>
        </div>
        <TestimonialNew />
        <Map />
        <Footer />
      </Container>
    </div>
  );
};

export default ServicePage;
