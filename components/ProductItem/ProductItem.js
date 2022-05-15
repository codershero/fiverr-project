import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import { OutlineButton } from "../Buttons/Buttons";
import styles from "./prod-item.module.scss";
import Link from "next/link";

const ProductItem = ({ title, description, img, slug }) => {
  return (
    <div className={styles.prod_item_container}>
      <div className={styles.prod_item_content}>
        <Typography variant="h3">{title}</Typography>
        <div className={styles.image_container}>
          <Image
            src={img}
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            blurDataURL={img}
            alt="product image"
          />
        </div>
        <Typography component="small">{description}</Typography>
        <Link href={`/products/${slug}`}>
          <OutlineButton circled="true">View Product</OutlineButton>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
