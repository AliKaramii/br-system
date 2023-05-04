import { Box, Button, Grid, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";

import userIcon from "../../../assets/svg/user-icon.svg";
import dateIcon from "../../../assets/svg/calendar-icon.svg";
import likeIcon from "../../../assets/svg/like-icon.svg";
import dislikeIcon from "../../../assets/svg/dislike-icon.svg";
import style from "./style.module.scss";
import AddCommentModal from "../../layout/modal-add-comment";

const UserComment = ({ data }) => {
  const [page, setPage] = useState(1);
  // const PER_PAGE = process.env.REACT_APP_COMMENT_PER_PAGE;
  // console.log("env:", process.env.REACT_APP_COMMENT_PER_PAGE);
  const count = 10; // TODO > remove this line and uncomment next line in API integration
  // const count = Math.ceil(data.length / PER_PAGE);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box margin={4}>
      <Grid
        container
        marginBottom={8}
        paddingY={2}
        className={style.addCommentBox}
      >
        <Typography component="p">
          با ثبت نظرات خود ما را در بهبود خدمات یاری کنید.
        </Typography>
        <AddCommentModal />
      </Grid>

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
                  <Grid className={style.likeBox} marginY={1}>
                    <p>{item.likes}</p>
                    <Button>
                      <img src={likeIcon} alt="user icon" />
                    </Button>
                  </Grid>
                  <Grid className={style.dislikeBox} marginY={1}>
                    <p>{item.disLikes}</p>
                    <Button>
                      <img src={dislikeIcon} alt="user icon" />
                    </Button>
                  </Grid>
                </div>
              </div>
            </Grid>
            <Grid className="topLined" paddingY={2}>
              <p>{item.commentBody}</p>
            </Grid>
            <Grid item xs={12} md={6} marginY={2} className={style.pointBox}>
              <Typography variant="successText">نقاط قوت</Typography>
              {item.posetivePoints.map((point, index) => {
                return <p key={index}>{point}</p>;
              })}
            </Grid>
            <Grid item xs={12} md={6} marginY={2} className={style.pointBox}>
              <Typography variant="dangerText">نقاط ضعف</Typography>
              {item.negativePoints.map((point, index) => {
                return <p key={index}>{point}</p>;
              })}
            </Grid>
          </Grid>
        );
      })}
      <Box display="flex" justifyContent="center">
        <Pagination
          count={count}
          page={page}
          onChange={handleChange}
          color="primary"
          shape="rounded"
          dir="ltr"
        />
      </Box>
    </Box>
  );
};
export default UserComment;
