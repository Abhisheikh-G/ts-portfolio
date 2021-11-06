import { createTheme, responsiveFontSizes, darken } from "@mui/material/styles";
import { red, cyan, yellow, grey } from "@mui/material/colors";
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
      main: darken(grey[900], 1),
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
    background: {
      default: darken(grey[900], 0.3),
    },
  },
  typography: {
    fontFamily: ["Encode Sans", "Zen Tokyo Zoo"].join(","),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
