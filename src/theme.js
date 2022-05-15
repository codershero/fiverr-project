import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#DDD087",
      contrastText: "#070707",
    },
    secondary: {
      main: "#070707", // custom button color (seafoam green)
      contrastText: "#FAFAFA", // custom button text (white)
    },
    error: {
      main: "#C6112E", // custom button color (red)
    },
  },
  typography: {
    fontFamily: ["Orbitron", "Poppins", "sans-serif"].join(","),
  },
  h1: {
    fontFamily: "Orbitron",
  },
  h2: { fontFamily: "Orbitron" },
  h3: { fontFamily: "Orbitron" },
  h4: { fontFamily: "Orbitron" },
});

theme = createTheme(theme, {
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthXl: {
          [theme.breakpoints.up("xl")]: {
            maxWidth: "1800px",
          },
          // Note that you can customize other properties here, like padding, color, .etc.
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "::after": {
            border: "none",
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: "#131176",
        },
        colorPrimary: {
          color: "#154251",
        },
        thumbColorPrimary: {
          width: "37px",
          height: "37px",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          color: "#000000",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "25px",
          lineHeight: "135%",
        },
        expandIconWrapper: {
          "&.Mui-expanded": {
            transform: "rotate(0deg)",
          },
          transform: "rotate(271deg)",
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          background: "transparent",
          borderBottom: `2px solid #070707`,
          padding: "1rem 1rem",
        },
      },
    },

    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
          color: "#000000",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "25px",
          lineHeight: "135%",
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          // flexDirection: "row-reverse",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#070707",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins",
          fontWeight: "400 !important",
          fontSize: "20px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "black",
          fontSize: "25px",
          fontFamily: "Poppins",
          "&.Mui-focused": {
            color: "#070707",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: "18px",
          color: "#070707",
          fontFamily: "Poppins",
          padding: "0.5rem 0",
          "::before": {
            borderBottom: "2px solid #070707",
          },
          "::after": {
            borderBottom: "2px solid #070707",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "::before": {
            border: "none",
          },
          ":hover": {
            border: "none",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: "Poppins",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          fontFamily: "Poppins",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: "40px",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
