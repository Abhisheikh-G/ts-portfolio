import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";

const CustomButton = ({
  children,
  onClick,
}: {
  children: string;
  onClick: () => Promise<boolean>;
}) => {
  const theme = useTheme();
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        height: theme.spacing(6),
        fontSize: "1.25em",
        margin: ".25em",
        borderColor: theme.palette.secondary.main,
        borderRadius: theme.spacing(20),
        color: theme.palette.secondary.main,
        transition: "all 0.2s ease-in",
        textDecoration: "none",
        "&:hover": {
          borderColor: theme.palette.custom.yellow,
          color: theme.palette.custom.yellow,
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
