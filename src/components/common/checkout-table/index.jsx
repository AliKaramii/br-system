import React from "react";
import { Container } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import CheckoutTableFeild from "./checkout-table-feild.jsx";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const CheckoutTable = ({
  title,
  data,
  to = undefined,
  btnText = "تایید",
  maxWidth = "sm",
}) => {
  return (
    <Container maxWidth={maxWidth}>
      <Box className={style.tableHeader}>
        <Typography component="h3" variant="p">
          {`${title} ${data.title}`}
        </Typography>
      </Box>
      <Box className={style.tableBody}>
        {data.rows.map((row, index) => {
          return <CheckoutTableFeild key={index} text={row} />;
        })}
        {to && (
          <Box className="flexRowReverse" marginRight={2}>
            {to && (
              <Link to={to}>
                <Button variant="contained">{btnText}</Button>
              </Link>
            )}
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default CheckoutTable;
