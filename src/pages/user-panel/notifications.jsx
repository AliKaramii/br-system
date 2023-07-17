import React, { useState } from "react";
import UserPanelLayout from "../../components/layout/user-panel";
import { Box, Pagination } from "@mui/material";
import notificationsIcon from "../../assets/svg/user-panel-notification.svg";
import NotifMessageItem from "../../components/base/notif-message-item";
import SearchBox from "../../components/base/search-box";

const pageTitle = { icon: notificationsIcon, title: "اطلاع رسانی" };
const sampleData = {
  title: "مدیر ساختمان",
  date: "1401/03/05",
  body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد",
};
const NotificationsPage = () => {
  const [page, setPage] = useState(1);
  // const PER_PAGE = process.env.REACT_APP_COMMENT_PER_PAGE;
  // console.log("env:", process.env.REACT_APP_COMMENT_PER_PAGE);
  const count = 10; // TODO > remove this line and uncomment next line in API integration
  // const count = Math.ceil(data.length / PER_PAGE);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Box>
        <UserPanelLayout pageTitle={pageTitle}>
          <SearchBox />
          <NotifMessageItem data={sampleData} />
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
        </UserPanelLayout>
      </Box>
    </>
  );
};

export default NotificationsPage;
