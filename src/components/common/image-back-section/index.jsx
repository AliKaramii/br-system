import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import style from "./style.module.scss";

const ImageBackSection = ({ backImage, title, text }) => {
  return (
    <>
      <Box
        marginTop="-75px"
        sx={{ backgroundImage: `url(${backImage})` }}
        className={style.imageBackContainer}
      >
        <Container maxWidth="sm">
          <Box className={style.introBox}>
            <Typography
              component="h1"
              variant="mainTitle"
            >{`رزرو ${title}`}</Typography>
            <Typography component="p" marginTop={2} marginBottom={3}>
              {text}
            </Typography>
            <Button href="#items" variant="outlined" className="primaryButton">
              رزرو
            </Button>
          </Box>
        </Container>
      </Box>
      {/* <div style={{ backgroundImage: `url:(${backImage} )` }}></div> */}
    </>
  );
};

export default ImageBackSection;
