import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import styles from "./faq.module.scss";
import { useState } from "react";

const Faq = ({faq_data}) => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.faqs_container}>
      {faq_data.map((item, index) => (
        <div key={index}>
          <Accordion
            expanded={expanded === item.panel}
            onChange={handleChange(item.panel)}
          >
            <AccordionSummary
              expandIcon={
                <Image
                  src={"//images/collapse_icon.svg"}
                  width={24}
                  height={24}
                  alt="collapse_icon.svg"
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={styles.question} variant="body1">
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.answer} component="small">
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default Faq;
