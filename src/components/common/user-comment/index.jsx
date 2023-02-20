import { Grid } from "@mui/material";
import * as React from "react";

const UserComment = ({ data }) => {
  return (
    <p>
      {data.map((item, j) => {
        return (
          <Grid
            container
            sx={{ borderBottom: "1px solid #6a14d1", marginBottom: "30px" }}
          >
            <Grid item md={6}>
              <div key={j}>
                <p>{item.userName}</p>
                <p>{item.date}</p>
              </div>
            </Grid>
            <Grid item md={6}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>آیا این نظر برای شما مفید بود؟</p>
                <p>{item.likes}</p>
                <p>{item.disLikes}</p>
              </div>
            </Grid>
            <Grid>
              <p>{item.commentBody}</p>
            </Grid>
            <Grid item md={6}>
              <p>نقاط ضعف</p>
              {item.negativePoints.map((point) => {
                return <p>{point}</p>;
              })}
            </Grid>
            <Grid item md={6}>
              <p>نقاط قوت</p>
              {item.posetivePoints.map((point) => {
                return <p>{point}</p>;
              })}
            </Grid>
          </Grid>
        );
      })}
    </p>
  );
};
export default UserComment;

// posetivePoints:
// negativePoints:
