import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { theme } from "../../../assets/themes/theme";
import style from "./style.module.scss";
import IconTitleBadge from "../../../components/base/badge-icon-title";
import ReserveHistoryModal from "./reserve-history-modal";
import { fetchData } from "../../../services/http-client";

const ReserveListCard = ({ data }) => {
  const { placeIcon, title, tel } = data[0];

  const [modalData, setmodalData] = useState();

  useEffect(() => {
    fetchData("/sampleCafeReceipt").then((fetchedData) => {
      return setmodalData(fetchedData);
    });
  }, []);

  return (
    <>
      {console.log(data)}
      <Box
        className={style.reserveListCard}
        sx={{ border: `1px solid ${theme.palette.border.dark1}` }}
      >
        <Box className="flexRowstart" marginBottom={2}>
          <img src={placeIcon} alt="icon" />
          <Typography marginX={1}>{title}</Typography>
          <Typography marginX={1}>
            شماره تماس:
            <Typography marginX={1} component="span" color="primary">
              {tel}
            </Typography>
          </Typography>
        </Box>

        <Grid container>
          <Grid item xs={12} md={10}>
            <Box className="flexRowstart">
              {data[1].map((item, index) => {
                return (
                  <IconTitleBadge key={index} icon={item[0]} text={item[1]} />
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12} md={2} className="flexRowCenter">
            {modalData && <ReserveHistoryModal data={modalData} />}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ReserveListCard;
