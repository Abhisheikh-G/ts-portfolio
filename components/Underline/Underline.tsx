import Box from "@mui/material/Box";
import { styled } from "@mui/styles";

const CustomizedBox = styled(Box)(({ theme }) => ({
  width: "inherit",
  height: 5,
  borderRadius: 20,
  background: `linear-gradient(to right, ${theme.palette.custom.yellow},${theme.palette.secondary.main})`,
}));

const Underline = () => {
  // const classes = useStyles();
  return <CustomizedBox />;
};

export default Underline;
