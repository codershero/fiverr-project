import Image from "next/image";
import dynamic from "next/dynamic";
import { Typography, Container, Button } from "@mui/material";
import {
  PrimaryButton,
  OutlineButton,
  SecondaryButton,
  SecondaryButtonWhite,
} from "../components/Buttons/Buttons";
import Navbar from "../components/Navbar/Navbar";
import OurClients from "../components/OurClients/OurClients";
import Map from "../components/MapComponent/MapComponent";
import Footer from "../components/Footer/Footer";
import { sanityClient } from "../lib/sanity.server";
import { urlFor } from "../lib/sanity";
import styles from "../styles/home.module.scss";
import Link from "next/link";
import TestimonialNew from "../components/TestimonialNew/TestimonialNew";
const Services = dynamic(() => import("../components/Services/Services"));
const Blog = dynamic(() => import("../components/Blog/Blog"));
const Brands = dynamic(() => import("../components/Brands/Brands"));

import { NextSeo } from "next-seo";

const Home = ({ blogs }) => {
  return (
    <div className={styles.home_container}>
      <NextSeo
        title="Kitchen and Bathroom Remodeling Contractors in Northern CA"
        description="Kitchen and Bathroom Remodeling Contractors in Northern CA | JC Construction and Remodeling | Call today: 916-295-250"
        canonical="https://jcconstruction.us/"
      />
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <Image
            src="//images/home_hero.jpg"
            layout="fill"
            objectFit="cover"
            alt="hero image"
            placeholder="blur"
            blurDataURL="/images/home_hero.jpg"
          />
          <div className={styles.overlay}></div>
          <div className={styles.header_content}>
            <Typography variant="h1">
              Kitchen and Bathroom Remodeling Contractors in Northern CA
            </Typography>
            <Typography variant="body1">
              JC Construction and Remodeling is a top-rated general contractor
              in Northern California. We are highly skilled in all aspects of
              residential remodeling, kitchens, bathrooms, and room additions.
            </Typography>
            <div className={styles.btns_container}>
              <Link href="/services">
                <SecondaryButtonWhite>All Home Services</SecondaryButtonWhite>
              </Link>
              <Link href="/contact">
                <PrimaryButton>Get a quote</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.services_container}>
          <Typography variant="h2">
            JC Construction & Remodeling | Sacramento's Trusted Remodeling and
            Construction Company
          </Typography>
          <Typography variant="body1">
            Looking for a reliable and trusted remodeling or construction
            company in Sacramento or Northern California? Look no further than
            JC Construction and Remodeling! We are highly skilled in all aspects
            of residential remodeling, from kitchens and bathrooms to room
            additions. We have a proven track record of satisfaction from our
            many happy customers, and we're ready to help. Call us today for a
            free consultation!
          </Typography>
          <Services />
          <div className={styles.btn_container}>
            <Link href="/services">
              <OutlineButton>View All Services</OutlineButton>
            </Link>
          </div>
        </div>
        <div className={styles.our_clients_container}>
          <Typography variant="h2">
            Past Clients Share Why You Should Choose JC Construction &
            Remodeling
          </Typography>
          <Typography variant="body1">
            Remodeling your bathroom or kitchen is a great way to improve the
            appearance and functionality of your Sacramento home, and we’re the
            perfect team to help you do it.
          </Typography>
          <Typography variant="body1">
            Call us now at <a href="tel:+19168867113">916-886-7113</a> to tell
            us about any remodel design ideas you have.
          </Typography>
          <OurClients />
        </div>
        <div className={styles.recent_blogs_container}>
          <Typography variant="h2">
            Sacramento Homes Remodeling and Construction Tips
          </Typography>
          <Typography variant="body1">
            Learn about the different aspects of home remodeling and
            construction from the experts at JC Construction and Remodeling. Get
            tips on everything from choosing the right contractor to ensuring
            your project stays on budget.
          </Typography>
          <div className={styles.blog_list_container}>
            {blogs &&
              blogs.map((item, i) => (
                <Blog
                  img={
                    item.mainImage && urlFor(item?.mainImage?.asset?._ref).url()
                  }
                  title={item.title}
                  description={item.excerpt}
                  author={item.author}
                  slug={item.slug.current}
                  key={i}
                />
              ))}
          </div>
          <div className={styles.btn_container}>
            <Link href="/blogs">
              <SecondaryButton> View All Blog Posts</SecondaryButton>
            </Link>
          </div>
        </div>
        <div className={styles.brands_title}>
          <Typography variant="h2">Our Preferred Brands and Vendors</Typography>
        </div>
        <Brands />
        <div className={styles.view_products_container}>
          <Image
            src="/images/prod_bg.png"
            layout="fill"
            objectFit="cover"
            alt="hero image"
            placeholder="blur"
            blurDataURL="/images/prod_bg.png"
          />
          <div className={styles.content_container}>
            <Typography variant="h1">
              Our Popular Selection of Home Products
            </Typography>
            <Link href="/products">
              <OutlineButton circled={"true"} islight={"true"}>
                View Products
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

export async function getStaticProps() {
  const query = `*[_type == "blogPosts"]`;
  let blogs = await sanityClient.fetch(query);
  blogs = blogs.slice(0, 3);
  return {
    props: {
      blogs,
    },
  };
}

export default Home;
