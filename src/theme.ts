import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red, blueGrey, cyan, yellow } from "@mui/material/colors";
import { Theme } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    custom: {
      yellow?: string;
      red?: string;
    };
  }
  interface PaletteOptions {
    custom: Object;
  }
}

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface (remove this line if you don't have the rule enabled)
  interface DefaultTheme extends Theme {}
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
