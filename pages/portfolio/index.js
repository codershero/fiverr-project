import Image from "next/image";
import { Typography, Container, Grid } from "@mui/material";
import TestimonialNew from "../../components/TestimonialNew/TestimonialNew";
import Map from "../../components/MapComponent/MapComponent";
import Footer from "../../components/Footer/Footer";
import { sanityClient } from "../../lib/sanity.server";
import styles from "../../styles/portfolio.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Link from "next/link";
import { OutlineButton } from "../../components/Buttons/Buttons";

const OurWork = () => {
  return (
    <div className={styles.our_work_container}>
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.main_portfolio_container}>
          <div className={styles.header}>
            <Typography variant="h1">
              Our Clients Expect The Best and We Deliver
            </Typography>
            <Typography variant="body1">
              Our portfolio of work is a testament to our dedication to quality
              craftsmanship and customer satisfaction. We have worked with some
              of the most demanding clients in the area and always deliver
              top-notch results that exceed expectations. We understand that
              your home is one of your biggest investments, and we take great
              pride in helping you protect and enhance its value.
            </Typography>
          </div>
          <div className={styles.content}>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <div className={styles.portfolio_cards}>
                  <Image
                    src="/images/portfolio_1.png"
                    objectFit="cover"
                    objectPosition="center"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL="/images/portfolio_1.png"
                    alt="portfolio_1.png"
                  />
                  <div className={styles.cards_present}>
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
              </Grid>
              <Grid item md={6} xs={12}>
                <div className={styles.portfolio_cards}>
                  <Image
                    src="/images/portfolio_2.png"
                    objectFit="cover"
                    objectPosition="center"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL="/images/portfolio_2.png"
                    alt="portfolio_2.png"
                  />
                  <div className={styles.cards_present}>
                    <Typography variant="h2">
                      Kitchen Remodeling Portfolio
                    </Typography>
                    <Link href="/portfolio/kitchen-remodeling-portfolio">
                      <OutlineButton islight="true" circled="true">
                        View Post Jobs
                      </OutlineButton>
                    </Link>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <TestimonialNew />
        <Map />
        <Footer />
      </Container>
    </div>
  );
};

export async function getStaticProps() {
  const query = `*[_type == "projects"]`;
  const pastProjects = await sanityClient.fetch(query);
  return {
    props: {
      pastProjects,
    },
  };
}

export default OurWork;
