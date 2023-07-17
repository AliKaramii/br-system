import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../assets/themes/theme";
import style from "./style.module.scss";

const PhoneBookComments = ({ data }) => {
  return (
    <Box className={style.comentBlock} marginBottom={4}>
      <Stack direction="column">
        <Box className="flexRowBetween">
          <Box className="flexRowstart">
            <img
              src={data.avatar}
              className={style.commentAvatar}
              alt="avatar"
            />
            <Typography marginX={2}>{data.name}</Typography>
          </Box>
          <Typography>{data.date}</Typography>
        </Box>

        <Typography className={style.commentBody}>{data.body}</Typography>
      </Stack>
    </Box>
  );
};
export default PhoneBookComments;
