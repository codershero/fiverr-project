import Image from "next/image";
import { useRouter } from "next/router";
import { Grid, Typography } from "@mui/material";
import { OutlineButton } from "../Buttons/Buttons";
import styles from "./blog.module.scss";
import Link from "next/link";

const Blog = ({ title, description, author, img, slug }) => {
  let router = useRouter();
  return (
    <div className={styles.blog_container}>
      <Grid
        container
        sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
      >
        <Grid item xs={12} md={6}>
          <section className={styles.content_section}>
            <Typography variant="h4">{title}</Typography>
            <Typography component="small">{author}</Typography>
            <Typography component="small">{description}</Typography>
            <Link href={`/blogs/${slug}`}>
              <OutlineButton circled="true">Read More</OutlineButton>
            </Link>
          </section>
        </Grid>
        <Grid item xs={12} md={6}>
          <section className={styles.img_section}>
            <Image
              src={img}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={img}
              alt="blog-image"
            />
          </section>
        </Grid>
      </Grid>
    </div>
  );
};

export default Blog;
