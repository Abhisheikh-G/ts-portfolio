import Box from "@mui/material/Box";
import { useTheme } from "@mui/styles";

const Underline = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: "inherit",
          height: 1.1,
          background: `linear-gradient(to right, ${theme.palette.custom.yellow},${theme.palette.secondary.main})`,
        }}
      />
      <Box
        sx={{
          width: "inherit",
          height: 1.1,
          my: "1px",
          background: `linear-gradient(to right, ${theme.palette.custom.yellow},${theme.palette.secondary.main})`,
        }}
      />
      <Box
        sx={{
          width: "inherit",
          height: 1.1,
          background: `linear-gradient(to right, ${theme.palette.custom.yellow},${theme.palette.secondary.main})`,
        }}
      />
    </>
  );
};

export default Underline;
