import Image from "next/image";
import { Typography, Container, Grid } from "@mui/material";
import TestimonialNew from "../components/TestimonialNew/TestimonialNew";
import Map from "../components/MapComponent/MapComponent";
import Footer from "../components/Footer/Footer";
import styles from "../styles/about.module.scss";
import Navbar from "../components/Navbar/Navbar";

const About = () => {
  return (
    <div className={styles.about_container}>
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <Image
            src="/images/about_header.png"
            layout="fill"
            objectFit="cover"
            alt="hero image"
            placeholder="blur"
            blurDataURL="/images/about_header.png"
          />
          <div className={styles.header_content}>
            <Typography variant="h1">
              Our Mission & Team |<br></br>JC Construction
            </Typography>
            <Typography variant="body1">
              Our team is comprised of experienced professionals who are
              passionate about their work and take pride in providing our
              clients with the best possible results. We are always available to
              answer any questions or concerns you may have, and we will work
              diligently to complete your project on time and within budget.
            </Typography>
          </div>
        </div>
        <div className={styles.our_mission_container}>
          <Typography variant="h2">Our Mission</Typography>
          <Typography variant="body1">
            We are a family owned and operated business that has been serving
            the Sacramento and Northern California region for more than 10
            years. We take pride in our work and stand behind every job we do.
            Customer satisfaction is our number one priority. We offer a wide
            range of services to meet all your remodeling needs. If you can
            dream it, we can build it!
          </Typography>
        </div>
        <div className={styles.our_team_container}>
          <Typography variant="h2">Our Team</Typography>
          <Grid container spacing={5}>
            <Grid item xs={12} md={5}>
              <section className={styles.image_section}>
                <div className={styles.image_container}>
                  <Image
                    src="/images/team_1.png"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/images/team_1.png"
                    alt="blog-image"
                  />
                </div>
              </section>
            </Grid>
            <Grid item xs={12} md={7}>
              <section className={styles.content_section}>
                <Typography variant="body1">
                  We are a team of highly skilled professionals who are
                  dedicated to providing our clients with the best possible
                  results. We have a wide range of experience and expertise in
                  all aspects of residential remodeling, and we are committed to
                  providing our clients with the highest quality workmanship and
                  customer service possible.
                </Typography>
                <Typography variant="body1">
                  Our team includes experienced project managers, designers, and
                  craftsmen who are all dedicated to providing our clients with
                  the best possible results. We work closely with our clients to
                  ensure that their vision is realized, and we take pride in our
                  ability to deliver exceptional results. Whether you{"'"}re
                  looking to remodel your kitchen, bathroom, or add an addition
                  to your home, we are confident that we can exceed your
                  expectations. Contact us today and let us show you what we can
                  do for you.
                </Typography>
              </section>
            </Grid>
          </Grid>
        </div>
        <div className={styles.about_gallery_container}>
          <div className={styles.hero_image_container}>
            <Image
              src={"/images/advertise_1.png"}
              layout="fill"
              objectFit="cover"
              alt="hero image"
              placeholder="blur"
              blurDataURL="/images/advertise_1.png"
            />
          </div>
          <Grid container>
            <Grid item xs={12} md={6}>
              <section className={styles.img_sec}>
                <Image
                  src="/images/advertise_2.png"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="/images/advertise_2.png"
                  alt="adv-image"
                />
              </section>
            </Grid>
            <Grid item xs={12} md={6}>
              <section className={styles.img_sec}>
                <Image
                  src="/images/advertise_3.png"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="/images/advertise_3.png"
                  alt="adv-image"
                />
              </section>
            </Grid>
          </Grid>
        </div>
        <TestimonialNew />
        {/* <Testimonials /> */}
        <Map />
        <Footer />
      </Container>
    </div>
  );
};

export default About;
