import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#6A14D1",
    },
    secondary: {
      main: "#C82090",
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "mainTitle",
          },
          style: {
            color: "#6A14D1",
            fontSize: "1.2rem",
            fontWeight: "600",
          },
        },
        {
          props: {
            variant: "mainTitle2",
          },
          style: {
            color: "#6A14D1",
            fontSize: "1rem",
            fontWeight: "600",
          },
        },
      ],
    },
  },
});
