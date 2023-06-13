import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../../../assets/themes/theme";
import pathes from "../../../router/pathes";

const AccordionReserveTable = ({ data }) => {
  return (
    <Container>
      <TableContainer
        sx={{ bgcolor: theme.palette.reserveMenu.tables, borderRadius: 2 }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>روز</TableCell>
              <TableCell>زمان شروع و پایان</TableCell>
              <TableCell>قیمت</TableCell>
              <TableCell>رزرو</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, indexI) => {
              // console.log("row");
              return (
                <TableRow key={indexI}>
                  {row.map((cell, index) => {
                    // console.log("cell", cell);
                    return <TableCell key={index}>{cell}</TableCell>;
                  })}
                  <TableCell>
                    <Link to={pathes.VENUERESERVATIONDATA}>
                      <Button variant="outlined" type="submit">
                        رزرو
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AccordionReserveTable;
