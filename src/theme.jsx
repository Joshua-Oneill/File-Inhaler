import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          background: "#242439",
          boxShadow: "-8px 8px 8px #0e0e17, 8px -8px 8px #13131F",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#D6D6DA",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#f2f2f7",
          backgroundColor: "#11111b",
        },
        notchedOutline: {
          borderColor: "#2e2e2e",
          borderWidth: "3px",
        },
      },
    },
  },
});

export default theme;
