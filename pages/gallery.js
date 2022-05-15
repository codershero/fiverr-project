import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import styles from "../styles/gallery.module.scss";
import Navbar from "../components/Navbar/Navbar";
import { Container, Typography } from "@mui/material";
import TestimonialNew from "../components/TestimonialNew/TestimonialNew";
import Map from "../components/MapComponent/MapComponent";
import Footer from "../components/Footer/Footer";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
const Gallery = dynamic(() => import("react-photo-gallery"),{
  ssr:false
});

const GalleryPage = () => {
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  let [selectedImage, setSelectedImage] = useState(0);
  let [isOpen, setIsOpen] = useState(false);

  function importAll(r) {
    let images = {};
    r.keys().forEach(item => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  useEffect(() => {
    let picturesClone = [];
    let objectClone = {};
    const images = importAll(
      require.context("../public/images/gallery", false, /\.(png|jpe?g|svg)$/)
    );
    for (const key in images) {
      let path = `images/gallery/${key}`;
      objectClone = { src: path, width: 5, height: 4 };
      picturesClone.push(objectClone);
    }
    // console.log(picturesClone, "PICTURES.CLONE...........");
    setGalleryPhotos(picturesClone);
  }, []);

  const openLightbox = useCallback((event, { photo, index }) => {
    // console.log(index, "INDEX..............");
    setSelectedImage(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setSelectedImage(0);
    setIsOpen(false);
  };

  return (
    <div className={styles.main_gallery_container}>
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <div className={styles.header_content}>
            <Typography variant="h1">
              View Our Remodeling Projects Gallery
            </Typography>
            <Typography component="p" variant="p">
              Thinking about updating your home’s look? Get inspired by some of
              our past projects! From kitchens and bathrooms to total home
              transformations, our team has the experience and skill to make
              your vision a reality. Whether you’re considering a small update
              or a complete overhaul, JC Construction and Remodeling is here to
              help. We specialize in all aspects of residential remodeling from
              simple cosmetic updates to complete home transformations, we can
              do it all.
            </Typography>
          </div>
        </div>
        <div className={styles.gallary_section}>
          <Gallery photos={galleryPhotos} onClick={openLightbox} />
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={galleryPhotos[selectedImage].src}
            nextSrc={galleryPhotos[(selectedImage + 1) % galleryPhotos.length].src}
            prevSrc={
              galleryPhotos[
                (selectedImage + galleryPhotos.length - 1) %
                  galleryPhotos.length
              ].src
            }
            onCloseRequest={closeLightbox}
            onMovePrevRequest={() => {
              setSelectedImage(
                (selectedImage + galleryPhotos.length - 1) %
                  galleryPhotos.length
              );
            }}
            onMoveNextRequest={() => {
              setSelectedImage((selectedImage + 1) % galleryPhotos.length);
            }}
          />
        )}
        <TestimonialNew />
        <Map />
        <Footer />
      </Container>
    </div>
  );
};

export default GalleryPage;
