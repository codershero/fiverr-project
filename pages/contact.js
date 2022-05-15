import { useState, useRef } from "react";
import Image from "next/image";
import {
  TextField,
  Container,
  Typography,
  ListItemText,
  Checkbox,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiSelect from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Navbar from "../components/Navbar/Navbar";
import TestimonialNew from "../components/TestimonialNew/TestimonialNew";
import Map from "../components/MapComponent/MapComponent";
import Footer from "../components/Footer/Footer";
import { OutlineButton, PrimaryButton } from "../components/Buttons/Buttons";
import styles from "../styles/contact-us.module.scss";
import { isNumeric, isEmail } from "validator";
import Link from "next/link";
import router from "next/router";

const ContactPage = () => {
  let [name, setName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [email, setEmail] = useState("");
  let [typeOfJob, setTypeOfJob] = useState([]);
  let [address, setAddress] = useState("");
  let [msg, setMsg] = useState("");

  let [activeForm, setActiveForm] = useState(0);
  const [personName, setPersonName] = useState([]);
  const [isEmpty, setIsEmpty] = useState(null);
  let scrollingRef = useRef(null);

  const onNextClick = () => {
    // console.log(isNumeric(phoneNumber));
    if (activeForm === 0 && name === "") {
      setIsEmpty("Please fill the name");
    } else if (activeForm === 1 && phoneNumber === "") {
      setIsEmpty("Please fill the phone number");
    } else if (phoneNumber && isNumeric(phoneNumber) != true) {
      setIsEmpty("Please enter numbers");
    } else if (activeForm === 2 && email === "") {
      setIsEmpty("Please fill the email");
    } else if (email && isEmail(email) != true) {
      setIsEmpty("Please fill the correct email");
    } else if (activeForm === 3 && typeOfJob[0] === undefined) {
      setIsEmpty("Please fill the typeOfJob");
    } else if (activeForm === 4 && address === "") {
      setIsEmpty("Please fill the address");
    } else {
      setIsEmpty(null);
      setActiveForm(activeForm + 1);
      scrollingRef.current.className = `${styles.leftScrollClass}`;
      setTimeout(() => {
        setIsEmpty(false);
        scrollingRef.current.className = `${styles.custom_input_container}`;
      }, 500);
    }
  };
  const onPreviousClick = () => {
    setActiveForm(activeForm - 1);
    scrollingRef.current.className = `${styles.rightScrollClass}`;
    setTimeout(() => {
      scrollingRef.current.className = `${styles.custom_input_container}`;
    }, 500);
  };

  async function mondayCall(payload) {
    await fetch("/api/contact/contactApi", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(payload),
    });
  }

  const onSubmitClick = () => {
    if (activeForm === 4 && address === "") {
      setIsEmpty("Please fill the address");
    } else {
      let quoteObj = {
        name,
        email,
        phoneNumber,
        address,
        typeOfJob,
        msg,
      };
      mondayCall(quoteObj);
      router.push("/thank-you");
    }
  };

  const Select = styled(MuiSelect)(props => ({
    width: "100%",
    borderBottom: "2px solid #070707",
    fontWeight: 700,
    color: "#070707",
    textAlign: "center",
    borderRadius: "0",
  }));
  const names = [
    "Bathroom Remodel",
    "Kitchen Remodel",
    "Flooring & Tile",
    "Siding",
    "Windows & Doors",
    "Additional Rooms",
    "Other",
  ];
  const handleChange = event => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
    setTypeOfJob(event.target.value);
  };

  return (
    <div className={styles.contact_us_container}>
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.main_contact_container}>
          <div className={styles.header_section}>
            <Typography variant="h1">
              Get a Quote <br /> Today!
            </Typography>
          </div>

          <div className={styles.contact_form}>
            <div className={styles.form_container}>
              {activeForm === 0 ? null : (
                <div className={styles.back_btn1_container}>
                  <Image
                    width={45}
                    height={45}
                    onClick={onPreviousClick}
                    src="/images/backbtn.svg"
                    alt="backbtn.svg"
                  />
                </div>
              )}
              <div className={styles.custom_input_container} ref={scrollingRef}>
                {activeForm === 0 ? (
                  <>
                    <TextField
                      label="Name"
                      variant="standard"
                      fullWidth
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                    {isEmpty ? (
                      <Typography
                        variant="span"
                        className={styles.error_message}
                      >
                        {isEmpty}
                      </Typography>
                    ) : null}
                  </>
                ) : null}
                {activeForm === 1 ? (
                  <>
                    <TextField
                      label="Phone number"
                      variant="standard"
                      fullWidth
                      value={phoneNumber}
                      onChange={e => setPhoneNumber(e.target.value)}
                    />
                    {isEmpty ? (
                      <Typography
                        variant="span"
                        className={styles.error_message}
                      >
                        {isEmpty}
                      </Typography>
                    ) : null}
                  </>
                ) : null}
                {activeForm === 2 ? (
                  <>
                    <TextField
                      label="Email"
                      variant="standard"
                      fullWidth
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    {isEmpty ? (
                      <Typography
                        variant="span"
                        className={styles.error_message}
                      >
                        {isEmpty}
                      </Typography>
                    ) : null}
                  </>
                ) : null}
                {activeForm === 3 ? (
                  <>
                    <Select
                      multiple
                      displayEmpty
                      variant="standard"
                      value={personName}
                      onChange={handleChange}
                      renderValue={selected => {
                        if (selected.length === 0) {
                          return (
                            <Typography variant="span">Type of job</Typography>
                          );
                        }
                        return selected.join(", ");
                      }}
                    >
                      {names.map(name => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={personName.indexOf(name) > -1} />
                          <ListItemText
                            sx={{ fontFamily: "Poppins !important" }}
                            primary={name}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                    {isEmpty ? (
                      <Typography
                        variant="span"
                        className={styles.error_message}
                      >
                        {isEmpty}
                      </Typography>
                    ) : null}
                  </>
                ) : null}
                {activeForm === 4 ? (
                  <>
                    <TextField
                      label="Address"
                      variant="standard"
                      fullWidth
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                    />
                    {isEmpty ? (
                      <Typography
                        variant="span"
                        className={styles.error_message}
                      >
                        {isEmpty}
                      </Typography>
                    ) : null}
                  </>
                ) : null}
                {activeForm === 5 ? (
                  <>
                    <TextField
                      label="Message"
                      variant="standard"
                      fullWidth
                      value={msg}
                      onChange={e => setMsg(e.target.value)}
                    />
                  </>
                ) : null}
              </div>
              {activeForm === 5 ? (
                <div className={styles.submit_form_container}>
                  <PrimaryButton onClick={onSubmitClick} type="submit">
                    Submit
                  </PrimaryButton>
                </div>
              ) : (
                <div className={styles.btn_container}>
                  <OutlineButton circled="true" onClick={onNextClick}>
                    Next
                  </OutlineButton>
                  <a href="tel:+19168867113">
                    <PrimaryButton circled="true">Call us now</PrimaryButton>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <TestimonialNew />
        <Map />
        <Footer />
      </Container>
    </div>
  );
};

export default ContactPage;
