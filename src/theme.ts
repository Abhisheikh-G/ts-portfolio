import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red, blueGrey, cyan, yellow } from "@mui/material/colors";

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
      yellow: yellow[500],
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ["Encode Sans"].join(","),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
