import Button from "@mui/material/Button";

const CustomButton = ({
  children,
  onClick,
  type,
}: {
  children: string;
  onClick?: () => any;
  type?: "button" | "submit";
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      type={type}
      sx={{
        background: "secondary.main",
        backgroundColor: "secondary.main",
        height: 40,
        mx: (theme) => theme.spacing(2),
        borderColor: "secondary.main",
        borderRadius: (theme) => theme.spacing(10),
        color: "secondary.contrastText",
        transition: "all 0.2s ease-in-out",
        textDecoration: "none",
        WebkitTransition: "all .2s ease-in-out",
        "&:hover": {
          background: (theme: any) =>
            `linear-gradient(to right, ${theme.palette.custom.yellow}, ${theme.palette.secondary.main})`,
          backgroundColor: "secondary.main",
          borderColor: "custom.yellow",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
