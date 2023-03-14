import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

class NotFoundPage extends React.Component {
  render() {
    return (
      <>
        <Typography
          component="h1"
          sx={{
            paddingTop: "10%",
            textAlign: "center",
            fontSize: "60px",
            width: "100%",
          }}
        >
          404 <br />
          صفحه پیدا نشد
        </Typography>
        <Box sx={{ color: "#fff", margin: "auto", textAlign: "center" }}>
          <Button variant="contained">
            <Link to="/" style={{ color: "#fff" }}>
              بر می گردم
            </Link>
          </Button>
        </Box>
      </>
    );
  }
}

export default NotFoundPage;
