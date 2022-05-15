import React from "react";
import { Typography, Grid } from "@mui/material";
import styles from "./our-clients.module.scss";

let clients_data = [
  {
    src: "https://www.youtube.com/embed/fXFcHnDfDBs",
  },
  {
    src: "https://www.youtube.com/embed/DxE9sR4g91s",
  },
  {
    src: "https://www.youtube.com/embed/lE8xxEjKrCE",
  },
  {
    src: "https://www.youtube.com/embed/WbOUpmGkdxg",
  },
  {
    src: "https://www.youtube.com/embed/mnqZM3ayHPg",
  },
  {
    src: "https://www.youtube.com/embed/YuW_I2pLFgQ",
  },
];

const OurClients = () => {
  return (
    <div className={styles.client_list_container}>
      <Grid container spacing={2}>
        {clients_data.map((item, i) => {
          return (
            <Grid key={i} item xs={12} sm={12} md={6}>
              <div className={styles.clinet_item}>
                <iframe
                  width="100%"
                  height="377"
                  src={item.src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default OurClients;
