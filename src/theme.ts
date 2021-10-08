import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red, blueGrey, cyan } from "@mui/material/colors";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    custom: Palette["primary"];
  }
  interface PaletteOptions {
    custom: Object;
  }
}

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[800],
    },
    secondary: {
      main: cyan[500],
    },
    custom: {
      red: red[800],
    },
    error: {
      main: red.A400,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
