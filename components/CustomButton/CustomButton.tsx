import Button from "@mui/material/Button";

const CustomButton = ({
  children,
  onClick,
  type,
}: {
  children: string;
  onClick?: () => Promise<boolean>;
  type?: "button" | "submit";
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      type={type}
      sx={{
        backgroundColor: "secondary.main",
        height: 40,
        mx: (theme) => theme.spacing(2),
        borderColor: "secondary.main",
        borderRadius: (theme) => theme.spacing(10),
        color: "secondary.contrastText",
        transition: "all 0.2s ease-in",
        textDecoration: "none",
        "&:hover": {
          borderColor: "custom.yellow",
          color: "custom.yellow",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
