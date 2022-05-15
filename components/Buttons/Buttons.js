import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

export const PrimaryButton = styled(MuiButton)(props => ({
  background: "#ddd087",
  fontWeight: 700,
  color: "#070707",
  textAlign: "center",
  "&:hover": {
    background: "#e1d06f",
  },
  borderRadius: props.circled === "true" ? "40px" : "0px",
  // ...props
}));

export const SecondaryButton = styled(MuiButton)(props => ({
  background: "#070707",
  fontWeight: 700,
  color: "#FAFAFA",
  textAlign: "center",
  "&:hover": {
    background: "#161515",
  },
}));

export const SecondaryButtonWhite = styled(MuiButton)(props => ({
  background: "#f1f1f1",
  fontWeight: 700,
  color: "#070707",
  textAlign: "center",
  "&:hover": {
    background: "#070707",
    color: "#f1f1f1",
  },
}));

export const OutlineButton = styled(MuiButton)(props => ({
  border: props.islight === "true" ? "2px solid #FAFAFA" : "2px solid #070707",
  background: "tranparent",
  fontWeight: 700,
  color: props.islight === "true" ? "#FAFAFA" : "#070707",
  textAlign: "center",
  borderRadius: props.circled === "true" ? "40px" : "0px",
}));
