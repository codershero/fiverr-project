import React from "react";
import { Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.scss";
import NavSm from "../NavSm/NavSm";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Navbar = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <nav className={styles.navbar_container}>
        <Link href="/" passHref>
          <div className={styles.logo_container}>
            <Image
              src="//images/navLogo.png"
              objectFit="cover"
              objectPosition="center"
              layout="fill"
              alt="logo"
            />
          </div>
        </Link>
        <Link href="/about" passHref>
          <Typography component="small">About Us</Typography>
        </Link>
        <div className={styles.dropdown}>
          <Typography component="small" onClick={handleClick}>
            Remodeling
            <ExpandMoreIcon />
          </Typography>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={() => router.push("/custom-kitchen-remodels")}>
              Custom Kitchen Remodeling
            </MenuItem>
            <MenuItem onClick={() => router.push("/custom-bathroom-remodels")}>
              Custom Bathroom Remodeling
            </MenuItem>
          </Menu>
        </div>
        <Link href="/services" passHref>
          <Typography component="small">All Services</Typography>
        </Link>
        <Link href="/products" passHref>
          <Typography component="small">Products</Typography>
        </Link>
        <Link href="/portfolio" passHref>
          <Typography component="small">Our Portfolio</Typography>
        </Link>
        <Link href="/blogs" passHref>
          <Typography component="small">The Blog</Typography>
        </Link>
        <Link href="/gallery" passHref>
          <Typography component="small">Our Gallery</Typography>
        </Link>
        <Link href="/contact" passHref>
          <Typography component="small">Contact Us</Typography>
        </Link>
      </nav>
      <NavSm />
    </>
  );
};

export default Navbar;
