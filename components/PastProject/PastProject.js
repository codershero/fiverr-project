import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Typography, Container } from "@mui/material";
import Lightbox from "react-image-lightbox";
import ScrollContainer from "react-indiana-drag-scroll";
import { urlFor } from "../../lib/sanity";
import { OutlineButton } from "../Buttons/Buttons";
import Link from "next/link";
import styles from "./past-project.module.scss";


const PastProject = ({ title, projectImages, description, video }) => {
  let scrollRef = useRef(null);
  let [isOpen, setIsOpen] = useState(false);
  let [selectedImage, setSelectedImage] = useState({});
  let [photoIndex, setPhotoIndex] = useState(0);
  let [isReset, setIsReset] = useState(false);

  const scroll = scrollOffset => {
    scrollRef.current.scrollLeft += scrollOffset;
    if (
      scrollRef.current.scrollLeft >=
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth
    ) {
      setIsReset(true);
    }
    if (scrollRef.current.scrollLeft <= 0) {
      setIsReset(false);
    }
  };

  return (
    <div className={styles.past_project_container}>
      <Typography variant="h2">{title}</Typography>

      <div className={styles.projectVideo}>
        {video && (
          <div className={styles.developmentVideo}>
            <iframe
              src={`https://www.youtube.com/embed/${video}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <div className={styles.scroll_btn_container}>
        {!isReset ? (
          <Image
            src={"//images/scroll_icon.svg"}
            width={28}
            height={18}
            alt="arrow"
            onClick={() => scroll(200)}
          />
        ) : null}
        <Typography component="small">Scroll to view</Typography>
        {isReset ? (
          <Image
            src={"//images/scroll_icon.svg"}
            width={28}
            height={18}
            alt="arrow"
            onClick={() => scroll(-200)}
            className={styles.rightScrollImage}
          />
        ) : null}
      </div>
      <ScrollContainer>
        <div className={styles.project_images_scroll_container} ref={scrollRef}>
          {projectImages?.map((image, i) => (
            <img
              key={i}
              id={i}
              src={urlFor(image.asset._ref).url()}
              onClick={ele => {
                setIsOpen(true);
                setSelectedImage({
                  id: ele.target.id,
                  src: ele.target.src,
                });
                setPhotoIndex(parseInt(ele.target.id));
              }}
              alt=""
            />
          ))}
        </div>
      </ScrollContainer>
      <Typography variant="body1">{description}</Typography>
      <div className={styles.btn_container}>
        <Link href="/contact">
          <OutlineButton
            variant="outlined"
            size="large"
            style={{
              width: "270px",
              height: "60px",
            }}
            islight="true"
          >
            Get Pricing
          </OutlineButton>
        </Link>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={urlFor(projectImages[photoIndex]).url()}
          nextSrc={urlFor(
            projectImages[(photoIndex + 1) % projectImages.length]?.asset?._ref
          ).url()}
          prevSrc={urlFor(
            projectImages[
              (photoIndex + projectImages.length - 1) % projectImages.length
            ]?.asset?._ref
          ).url()}
          onCloseRequest={() => setIsOpen()}
          onMovePrevRequest={() => {
            setPhotoIndex(photoIndex - (1 % projectImages.length));
            if (photoIndex <= 0) {
              setPhotoIndex(0);
            }
          }}
          onMoveNextRequest={() => {
            setPhotoIndex(photoIndex + (1 % projectImages.length));
            if (photoIndex >= projectImages.length - 1) {
              setPhotoIndex(projectImages.length - 1);
            }
          }}
        />
      )}
    </div>
  );
};

export default PastProject;
