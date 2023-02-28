import { createTheme } from "@mui/material/styles";

const colors = {
  primary: {
    main: "#6a14d1",
  },

  secondary: {
    main: "#C82090",
  },
  text: {
    light9: "#fafafa;",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary.main,
    },
    secondary: {
      main: colors.secondary.main,
    },
    text: {
      light: colors.text.light9,
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "mainIconTitle",
          },
          style: {
            color: colors.primary.main,
            fontSize: "1.2rem",
            fontWeight: "600",
            paddingRight: "4px",
            borderTop: "6px solid transparent",
            borderBottom: "6px solid transparent",
            borderLeft: "6px solid transparent",
            borderRight: "8px solid #6A14D1",
            borderRadius: "5px",
            textAlign: "right",
          },
        },
        {
          props: {
            variant: "mainTitle",
          },
          style: {
            color: colors.primary.main,
            fontSize: "1.2rem",
            fontWeight: "600",
          },
        },
        {
          props: {
            variant: "mainTitle2",
          },
          style: {
            color: colors.primary.main,
            fontSize: "1rem",
            fontWeight: "600",
          },
        },
        {
          props: {
            variant: "nomalBody",
          },
          style: {
            fontSize: "16px",
          },
        },
        {
          props: { variant: "smallBody" },
          style: { fontSize: "14px" },
        },
        {
          props: { variant: "dangerText" },
          style: { color: "red" },
        },
        {
          props: { variant: "successText" },
          style: { color: "green" },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: {
            variant: "outlined",
          },
          style: {
            // border: "2px solid",
            // borderImage: "linear-gradient(to bottom, #6A14D1, #c82090) 8",
            borderRadius: "8px",
          },
        },
      ],
    },
  },
});

// console.log(theme.palette.primary.main);
