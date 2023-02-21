import { Box, Button, Grid, Pagination, Typography } from "@mui/material";
import * as React from "react";
import userIcon from "../../../assets/svg/user-icon.svg";
import dateIcon from "../../../assets/svg/calendar-icon.svg";
import likeIcon from "../../../assets/svg/like-icon.svg";
import dislikeIcon from "../../../assets/svg/dislike-icon.svg";
import style from "./style.module.scss";

const UserComment = ({ data }) => {
  return (
    <div>
      {data.map((item, j) => {
        return (
          <Grid
            key={j}
            container
            sx={{ borderBottom: "1px solid #6a14d1", marginBottom: "30px" }}
          >
            <Grid item xs={12} md={6}>
              <div className={style.userDataBox}>
                <div>
                  <img src={userIcon} alt="user icon" />
                  <p>{item.userName}</p>
                </div>
                <div>
                  <img src={dateIcon} alt="user icon" />
                  <p>{item.date}</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className={style.reactionsDataBox}>
                  <p>آیا این نظر برای شما مفید بود؟</p>
                  <div className={style.likeBox}>
                    <p>{item.likes}</p>
                    <Button>
                      <img src={likeIcon} alt="user icon" />
                    </Button>
                  </div>
                  <div className={style.dislikeBox}>
                    <p>{item.disLikes}</p>
                    <Button>
                      <img src={dislikeIcon} alt="user icon" />
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid
              className="topLined"
              sx={{ borderTop: "1px solid lightgray" }}
            >
              <p>{item.commentBody}</p>
            </Grid>
            <Grid item xs={12} md={6} marginY={2}>
              <Typography variant="successText">+ نقاط قوت</Typography>
              {item.posetivePoints.map((point, index) => {
                return <p key={index}>{point}</p>;
              })}
            </Grid>
            <Grid item xs={12} md={6} marginY={2}>
              <Typography variant="dangerText">- نقاط ضعف</Typography>
              {item.negativePoints.map((point, index) => {
                return <p key={index}>{point}</p>;
              })}
            </Grid>
          </Grid>
        );
      })}
      <Box display="flex" justifyContent="center">
        <Pagination variant="outlined" count={4} shape="rounded" dir="ltr" />
      </Box>
    </div>
  );
};
export default UserComment;

// posetivePoints:
// negativePoints:
