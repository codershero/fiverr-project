import Marquee from "react-fast-marquee";
import Image from "next/image";
import styles from "./brands.module.scss";

const Brands = () => {
  const all_brands = [
    {
      src: "//images/brands/brand_1.jpg",
    },
    {
      src: "//images/brands/brand_2.jpg",
    },
    {
      src: "//images/brands/brand_3.jpg",
    },
    {
      src: "//images/brands/brand_4.jpg",
    },
    {
      src: "//images/brands/brand_5.jpg",
    },
    {
      src: "//images/brands/brand_6.jpg",
    },
    {
      src: "//images/brands/brand_7.jpg",
    },
    {
      src: "//images/brands/brand_8.jpg",
    },
    {
      src: "//images/brands/brand_9.jpg",
    },
    {
      src: "//images/brands/brand_10.jpg",
    },
    {
      src: "//images/brands/brand_11.png",
    },
    {
      src: "//images/brands/brand_12.png",
    },
    {
      src: "//images/brands/brand_13.png",
    },
    {
      src: "//images/brands/brand_14.png",
    },
    {
      src: "//images/brands/brand_15.png",
    },
    {
      src: "//images/brands/brand_16.png",
    },
    {
      src: "//images/brands/brand_17.png",
    },
    {
      src: "//images/brands/brand_18.png",
    },
    {
      src: "//images/brands/brand_19.png",
    },
    {
      src: "//images/brands/brand_20.png",
    },
    {
      src: "//images/brands/brand_21.png",
    },
    {
      src: "//images/brands/brand_22.png",
    },
  ];
  return (
    <div className={styles.brands_container}>
      <Marquee speed={60}>
        {all_brands.map((item, index) => (
          <Image key={index} src={item.src} width={250} height={130} layout="intrinsic" />
        ))}
      </Marquee>
    </div>
  );
};

export default Brands;
