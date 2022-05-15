import Image from "next/image";
import { Grid, Typography, Container } from "@mui/material";
import { PrimaryButton } from "../Buttons/Buttons";
import styles from "./footer.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <Image
        src="//images/footer.png"
        style={{ opacity: ".3" }}
        layout="fill"
        objectFit="cover"
        alt="hero image"
        placeholder="blur"
        blurDataURL="/images/footer.png"
      />
      <div className={styles.certificate_container}>
        <div className={styles.all_certificate}>
          <Grid container style={{ justifyContent: "space-between" }}>
            <Grid item xs={6} md={6} lg={3}>
              <div className={styles.certificate}>
                <Image
                  src="//images/certificate_1.svg"
                  width={150}
                  height={195}
                  layout="intrinsic"
                  objectFit="contain"
                />
                <Typography component="small">Member of NARI</Typography>
              </div>
            </Grid>
            <Grid item xs={6} md={6} lg={3}>
              <div className={styles.certificate}>
                <Image
                  src="//images/certificate_2.svg"
                  width={150}
                  height={195}
                  layout="intrinsic"
                  objectFit="contain"
                />
                <Typography component="small">LIC #1065275 CSLB</Typography>
              </div>
            </Grid>
            <Grid item xs={6} md={6} lg={3}>
              <div className={styles.certificate}>
                <Image
                  src="//images/certificate_3.svg"
                  width={150}
                  height={195}
                  layout="intrinsic"
                  objectFit="contain"
                />
                <Typography component="small">
                  Accreditation with BBB
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6} md={6} lg={3}>
              <div className={styles.certificate}>
                <Image
                  src="//images/certificate_4.svg"
                  width={150}
                  height={195}
                  layout="intrinsic"
                  objectFit="contain"
                />
                <Typography component="small">Member of NKBA</Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <Typography variant="h2">
        Let’s Get Your Project <br /> Started Today
      </Typography>
      <div className={styles.footer_links_container}>
        <Grid container>
          <Grid item xs={6} md={3}>
            <Typography variant="h4">Cities We Serve</Typography>
            <div className={styles.link_section}>
              <Link href="/">
                <Typography variant="body1">Sacramento</Typography>
              </Link>
              <Link href="/">
                <Typography variant="body1">Rosevile</Typography>
              </Link>
              <Link href="/">
                <Typography variant="body1">Rocklin</Typography>
              </Link>
              <Link href="/">
                <Typography variant="body1">Folsom</Typography>
              </Link>
              <Link href="/">
                <Typography variant="body1">Antelope</Typography>
              </Link>
              <Link href="/">
                <Typography variant="body1">Citrus Heights</Typography>
              </Link>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div className={styles.link_section_special}>
              <br />
              <Typography variant="body1"></Typography>
              <Link href="/">
                <Typography variant="body1">Rancho Cordova</Typography>
              </Link>
              <Link href="/">
                <Typography variant="body1">El Dorado Hills</Typography>
              </Link>
              <Link href="/">
                <Typography variant="body1">Fair Oaks</Typography>
              </Link>
              <Link href="/">
                <Typography variant="body1">Folsom</Typography>
              </Link>
              <Link href="/">
                <Typography variant="body1">Lincoln</Typography>
              </Link>
              <Link href="/">
                <Typography variant="body1">Granite Bay</Typography>
              </Link>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h4">Services</Typography>
            <div className={styles.link_section}>
              <Link href="/custom-kitchen-remodels">
                <Typography variant="body1">Kitchen Remodel</Typography>
              </Link>
              <Link href="/custom-bathroom-remodels">
                <Typography variant="body1">Bathroom Remodel</Typography>
              </Link>
              <Link href="/flooring-and-tiling">
                <Typography variant="body1">Flooring & Tile</Typography>
              </Link>
              <Link href="/replacement-windows-and-doors">
                <Typography variant="body1">Windows & Doors</Typography>
              </Link>
              <Link href="/siding-installation">
                <Typography variant="body1">Siding</Typography>
              </Link>
              <Link href="/room-additions-and-adu-buildings">
                <Typography variant="body1">Room Additions</Typography>
              </Link>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h4">Operating Hours</Typography>
            <div className={styles.link_section}>
              <Typography component="small">
                3244 Fulton Avenue Sacramento, CA 95821
              </Typography>
              <Typography component="small">Monday - Saturday</Typography>
              <Typography component="small">9:00AM - 5:00PM</Typography>
              <a href="tel:+19168867113">
                <Typography component="small">
                  <b>+1(916)886-7113</b>
                </Typography>
              </a>
              <div className={styles.social_icons}>
                <a
                  href="https://www.facebook.com/Jcconstruction.us/"
                  target="_blank"
                >
                  <Image
                    src={"//images/fb.svg"}
                    width={50}
                    height={50}
                    alt="fb.svg"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCwG4h7ODaC0Gcpj-MpxwE4Q"
                  target="_blank"
                >
                  <Image
                    src={"//images/yt.svg"}
                    width={50}
                    height={50}
                    alt="yt.svg"
                  />
                </a>
                <a
                  href="https://www.instagram.com/jcconstruction.us/"
                  target="_blank"
                >
                  <Image
                    src={"//images/insta.svg"}
                    width={50}
                    height={50}
                    alt="insta.svg"
                  />
                </a>
              </div>
              {/* <div className={styles.btn_container}>
                <Link href="/contact">
                  <PrimaryButton>Get a quote</PrimaryButton>
                </Link>
              </div> */}
            </div>
          </Grid>
        </Grid>

        <div className={styles.brnads_logo_container}>
          <div className={styles.brands_image}>
            <a
              href="https://www.andersenwindows.com/where-to-buy/28/288153/"
              target="_blank"
            >
              <Image
                src="//images/anderson-certified.png"
                width={200}
                height={200}
                layout="intrinsic"
                objectFit="contain"
              />
            </a>
          </div>
          <div className={styles.brands_image}>
            <a
              href="https://app.gethearth.com/financing/26477/41600/prequalify?utm_campaign=26477&utm_content=red&utm_medium=contractor-website&utm_source=contractor&utm_term=41600"
              target="_blank"
            >
              <Image
                src="//images/easy-financing.png"
                width={200}
                height={200}
                layout="intrinsic"
                objectFit="contain"
              />
            </a>
          </div>
          <div className={styles.brands_image}>
            <a
              href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x809ad92812931ad7:0xdb53a117be8ea501!12e1?source=g.page.m&laa=merchant-review-solicitation"
              target="_blank"
            >
              <Image
                src="//images/google-review.png"
                width={180}
                height={180}
                layout="intrinsic"
                objectFit="contain"
              />
            </a>
          </div>
          <div className={styles.brands_image}>
            <a
              href="https://www.yelp.com/writeareview/biz/3jOaIErnrw7CyM1y3vh7Fw?return_url=%2Fbiz%2F3jOaIErnrw7CyM1y3vh7Fw&review_origin=biz-details-war-button"
              target="_blank"
            >
              <Image
                src="//images/yelp_review.png"
                width={250}
                height={250}
                layout="intrinsic"
                objectFit="contain"
              />
            </a>
          </div>
          <div className={styles.sub_brands_image}>
            <div className={styles.brands_title1}>
              <a
                href="https://www.bbb.org/us/ca/sacramento/profile/general-contractor/jc-construction-remodeling-1156-90056538/#sealclick"
                target="_blank"
              >
                <Image
                  src="//images/bbb.png"
                  width={250}
                  height={100}
                  layout="intrinsic"
                  objectFit="contain"
                />
              </a>
            </div>
            <div className={styles.brands_title2}>
              <a href="https://nkba.org/" target="_blank">
                <Image
                  src="//images/NKBA.svg"
                  width={300}
                  height={100}
                  layout="intrinsic"
                  objectFit="contain"
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footer_line}>
          <Typography component="small">
            © Copyright 2022 JC Construction & Remodeling | All Rights Reserved
            | Do not duplicate or redistribute in any form. Construction website
            designed, developed and maintained by:
            <a href="https://www.arcrel.com/" target="_blank">
              <Image
                src="//images/ar_logo.svg"
                width={250}
                height={50}
                layout="intrinsic"
                objectFit="fill"
              />
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
