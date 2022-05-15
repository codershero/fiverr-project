import dynamic from "next/dynamic";
import { Typography, Container } from "@mui/material";
import TestimonialNew from "../../components/TestimonialNew/TestimonialNew";
import Map from "../../components/MapComponent/MapComponent";
import Footer from "../../components/Footer/Footer";
import { sanityClient } from "../../lib/sanity.server";
import styles from "../../styles/portfolioSamples.module.scss";
import Navbar from "../../components/Navbar/Navbar";
const PastProject = dynamic(() =>
  import("../../components/PastProject/PastProject")
);

const KitchenRemodelingPortfolio = ({ pastProjects }) => {
  return (
    <div className={styles.our_work_container}>
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <div className={styles.header_content}>
            <Typography variant="h1">
              Kitchen Remodeling Jobs Portfolio
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              eget quam nec tristique non, quam. Nulla diam interdum tellus eu.
              Erat tincidunt mauris nunc, tincidunt imperdiet egestas commodo
              et.
            </Typography>
          </div>
        </div>
        <div className={styles.past_projects_container}>
          {pastProjects &&
            pastProjects.map((item, index) => (
              <PastProject
                title={item.title}
                projectImages={item.projectImages}
                description={item.description}
                video={item.projectVideo}
                key={index}
              />
            ))}
        </div>
        <TestimonialNew />
        <Map />
        <Footer />
      </Container>
    </div>
  );
};

export async function getStaticProps() {
  const query = `*[_type == "projects" && jobType[0].label == "Kitchen Remodel"]`;
  const pastProjects = await sanityClient.fetch(query);
  return {
    props: {
      pastProjects,
    },
    revalidate: 300,
  };
}

export default KitchenRemodelingPortfolio;
