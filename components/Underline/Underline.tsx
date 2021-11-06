import Box from "@mui/material/Box";
import { useTheme } from "@mui/styles";

const Underline = () => {
  const theme = useTheme();
  // const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          width: "inherit",
          height: 2,

          background: `linear-gradient(to right, ${theme.palette.custom.yellow},${theme.palette.secondary.main})`,
        }}
      />
      <Box
        sx={{
          width: "inherit",
          height: 2,
          my: "1px",

          background: `linear-gradient(to right, ${theme.palette.custom.yellow},${theme.palette.secondary.main})`,
        }}
      />
      <Box
        sx={{
          width: "inherit",
          height: 2,

          background: `linear-gradient(to right, ${theme.palette.custom.yellow},${theme.palette.secondary.main})`,
        }}
      />
    </>
  );
};

export default Underline;
