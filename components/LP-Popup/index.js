import React, { useState } from "react";
import styles from "./styles.module.scss";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import router from "next/router";
import { PrimaryButton } from "../../components/Buttons/Buttons";

export default function Index({ setModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  async function Send(payload) {
    await fetch("/api/contact/kitchen-remodel", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(payload),
    });
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    const payload = {
      fullName: name,
      phone: phone,
      email: email,
      address: address,
    };
    Send(payload);
    router.push("/thank-you");
  };

  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100vh" }}
      transition={{
        type: "spring",
        stiffness: 30,
        duration: 0.4,
        bounce: 2,
      }}
      className={styles.modal}
    >
      <div className={styles.form}>
        <Typography variant="h2">
          Put Your Home's Needs In Good Hands
          <div
            className={styles.close}
            onClick={() => setModal(prevState => !prevState)}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2C8.2 2 2 8.2 2 16C2 23.8 8.2 30 16 30C23.8 30 30 23.8 30 16C30 8.2 23.8 2 16 2ZM16 28C9.4 28 4 22.6 4 16C4 9.4 9.4 4 16 4C22.6 4 28 9.4 28 16C28 22.6 22.6 28 16 28Z"
                fill=""
              />
              <path
                d="M21.4 23L16 17.6L10.6 23L9 21.4L14.4 16L9 10.6L10.6 9L16 14.4L21.4 9L23 10.6L17.6 16L23 21.4L21.4 23Z"
                fill=""
              />
            </svg>
          </div>
        </Typography>
        <form onSubmit={handleFormSubmit} id="leadForm">
          <div className={styles.inputs}>
            <TextField
              color="secondary"
              name="Name"
              className={styles.formName}
              onChange={e => setName(e.target.value)}
              fullWidth
              required
              label="Name"
              variant="standard"
            />
            <TextField
              className={styles.formEmail}
              onChange={e => setEmail(e.target.value)}
              fullWidth
              name="Email"
              color="secondary"
              required
              label="Email"
              variant="standard"
            />
            <TextField
              className={styles.formNumber}
              onChange={e => setPhone(e.target.value)}
              fullWidth
              color="secondary"
              name="Phone"
              required
              label="Phone Number"
              variant="standard"
            />
            <TextField
              className={styles.formNumber}
              onChange={e => setAddress(e.target.value)}
              fullWidth
              color="secondary"
              name="Address"
              label="Address"
              variant="standard"
            />
          </div>
          <div className={styles.button}>
            <PrimaryButton type="submit">Submit Info</PrimaryButton>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
