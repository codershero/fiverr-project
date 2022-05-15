import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav-sm.module.scss";
import { useRef } from "react";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";

const NavSm = () => {
  let [isOpen, setOpen] = useState(false);
  let navLinksRef = useRef(null);
  let navLogoRef = useRef(null);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled(props => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  function hamburgerClick() {
    let drawer = navLinksRef.current.classList.toggle(styles.open);
    if (drawer) {
      setOpen(true);
    } else {
      setOpen(false);
    }
    Array.from(navLinksRef.current.children).forEach(link => {
      link.classList.toggle(styles.fade);
    });
    navLogoRef.current.children[0].className = styles.click_logo_animate;
    setTimeout(() => {
      navLogoRef.current.children[0].className = "";
    }, 500);
  }

  return (
    <>
      <nav className={styles.nav_sm_container}>
        <div className={styles.mobile_navbar}>
          <div className={styles.special_logo}>
            {isOpen != true ? null : (
              <Link href="/">
                <Image
                  src="//images/jc_logo.svg"
                  width={171}
                  height={58}
                  layout="intrinsic"
                  priority={true}
                  alt="logo"
                />
              </Link>
            )}
          </div>
          <div
            className={styles.icons}
            onClick={hamburgerClick}
            ref={navLogoRef}
          >
            {isOpen ? (
              <Image
                src="//images/mobile_navbar_close1.svg"
                width={"100%"}
                height={"80%"}
                layout="intrinsic"
                quality={"100"}
                priority={true}
                loading={"eager"}
                alt="hamburger-icon"
                className={isOpen ? styles.click_logo_animate : null}
              />
            ) : (
              <Image
                src="//images/mobile_navbar_icon1.svg"
                width={"70%"}
                height={"40%"}
                layout="intrinsic"
                quality={"100"}
                priority={true}
                loading={"eager"}
                alt="cross-icon"
                className={styles.click_logo_animate}
              />
            )}
          </div>
        </div>
        <div className={styles.nav_links} ref={navLinksRef}>
          {/* <Link href="/">
            <Typography variant="h4">Home</Typography>
          </Link> */}
          <Link href="/about">
            <Typography variant="body1">About Us</Typography>
          </Link>
          <div>
            <div className={styles.dropdown} onClick={handleExpandClick}>
              <Typography variant="body1">Remodeling</Typography>
              <ExpandMore expand={expanded}>
                <ExpandMoreIcon />
              </ExpandMore>
            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Link href="/custom-kitchen-remodels">
                <Typography variant="body1" style={{ marginTop: "1rem" }}>
                  Custom Kitchen Remodeling
                </Typography>
              </Link>
              <Link href="/custom-bathroom-remodels">
                <Typography variant="body1" style={{ marginTop: "1rem" }}>
                  Custom Bathroom Remodeling
                </Typography>
              </Link>
            </Collapse>
          </div>
          <Link href="/services">
            <Typography variant="body1">All Services</Typography>
          </Link>
          <Link href="/products">
            <Typography variant="body1">Products</Typography>
          </Link>
          <Link href="/portfolio">
            <Typography variant="body1">Our Portfolio</Typography>
          </Link>
          <Link href="/blogs">
            <Typography variant="body1">The Blog</Typography>
          </Link>
          <Link href="/gallery">
            <Typography variant="body1">Our Gallery</Typography>
          </Link>
          <Link href="/contact">
            <Typography variant="body1">Contact Us</Typography>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavSm;
