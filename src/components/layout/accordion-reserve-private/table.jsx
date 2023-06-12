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

const AccordionReserveTable = ({ data }) => {
  console.log("data from acc table >>>>", data);
  return (
    <Container>
      <TableContainer>
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
            {data.forEach((row) => {
              console.log("row");
              <TableRow>
                {row.map((cell, index) => {
                  console.log("cell", cell);
                  return <TableCell key={index}>{cell}</TableCell>;
                })}
                <TableCell>
                  <Link to="#">
                    <Button variant="outlined" type="submit">
                      رزرو
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AccordionReserveTable;
