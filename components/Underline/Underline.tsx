import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  underline: {
    width: "inherit",
    height: 5,
    background: `linear-gradient(to right, ${theme.palette.custom.yellow},${theme.palette.secondary.main})`,
    borderRadius: 10,
  },
}));

const Underline = () => {
  const classes = useStyles();
  return <Box className={classes.underline} />;
};

export default Underline;
