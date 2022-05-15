import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography, Grid } from "@mui/material";

import styles from "./services.module.scss";
let service_data = [
  {
    img: "/images/services/kitchen-remodeling.png",
    title: "Kitchen Remodel",
    description:
      "Your dream cooking and dining space is within reach. JC Construction and Remodeling offers high-end kitchen renovations that fit every budget.",
    button: "Learn More",
    link: "/custom-kitchen-remodels",
  },
  {
    img: "/images/services/bathroom-remodeling.png",
    title: "Bathroom Remodel",
    description:
      "We’ll design a bathroom you’ll be proud to show off! Our experienced contractors and designers will handle everything from design all the way to your satisfaction.",
    button: "Learn More",
    link: "/custom-bathroom-remodels",
  },
  {
    img: "/images/services/flooring-and-tile.png",
    title: "Flooring & Tile",
    description:
      "If you want to keep your floors,  you can still revamp its appearance with flooring repairs. Floor refinishing is the perfect way to transform dull wooden floors.",
    button: "Learn More",
    link: "/flooring-and-tiling",
  },
  {
    img: "/images/services/windows-and-doors/windows-and-doors.jpg",
    title: "Windows & Doors",
    description:
      "Is it time to replace your windows and doors? If the doors are too drafty and don’t have enough light coming and cracks, it is time to replace your door and windows.",
    button: "Learn More",
    link: "replacement-windows-and-doors",
  },
  {
    img: "/images/services/siding/siding.jpg",
    title: "Siding",
    description:
      "If you want a fresh look for your home, the siding will surely give it a breath of fresh air. There are many types of siding material on the market. We have so many options that will fit your taste.",
    button: "Learn More",
    link: "/siding-installation",
  },
  {
    img: "/images/services/room-additions.png",
    title: "Room Additions",
    description:
      "Do you need some extra space in your home in the Sacramento, CA area? No matter the size of the new addition, trust us to get the job done right and on time.",
    button: "Learn More",
    link: "/room-additions-and-adu-buildings",
  },
];

const Services = () => {
  return (
    <div className={styles.service_list_container}>
      <Grid container spacing={2}>
        {service_data.map((item, i) => {
          return (
            <Grid key={i} item sm={12} md={4}>
              <div className={styles.service_item}>
                <Image
                  src={item.img}
                  width={600}
                  height={400}
                  placeholder="blur"
                  blurDataURL={item.img}
                  layout="responsive"
                  alt="JC Remodeling and Construction Services"
                />
                <div className={styles.service_content}>
                  <Typography variant="h4">{item.title}</Typography>
                  <Typography component="small">{item.description}</Typography>
                  <Link href={item.link}>
                    <Typography variant="body1" component="a">
                      Learn More
                    </Typography>
                  </Link>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Services;
