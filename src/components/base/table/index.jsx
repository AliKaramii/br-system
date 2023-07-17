import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { theme } from "../../../assets/themes/theme";

function createData(cost, status, date, price, desc) {
  return { cost, status, date, price, desc };
}

const rows = [
  createData(
    "شارژ ساختمان",
    "بدهکار",
    "1402/06/11",
    "1200.000 ریال",
    "لورم ایپسوم یک متن آزمایشی برای کمک به طراح است"
  ),
  createData(
    "شارژ قبض آب",
    "بدهکار",
    "1402/05/11",
    "135.000 ریال",
    "لورم ایپسوم یک متن آزمایشی برای کمک به طراح است"
  ),
  createData(
    "هزینه نظافت",
    "تسویه",
    "1402/04/18",
    "650.000 ریال",
    "لورم ایپسوم یک متن آزمایشی برای کمک به طراح است"
  ),
  createData(
    "شارژ ساختمان",
    "بستانکار",
    "1402/04/09",
    "3.030.000 ریال",
    "لورم ایپسوم یک متن آزمایشی برای کمک به طراح است"
  ),
  createData(
    "شارژ ساختمان",
    "بدهکار",
    "1402/03/02",
    "1200.000 ریال",
    "لورم ایپسوم یک متن آزمایشی برای کمک به طراح است"
  ),
];

const BasicTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="primaryTableHeader">
            <TableCell align="left">هزینه</TableCell>
            <TableCell align="left">وضعیت</TableCell>
            <TableCell align="left">تاریخ</TableCell>
            <TableCell align="left">مبلغ</TableCell>
            <TableCell align="center">توضیحات</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row">
                {row.cost}
              </TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="center">{row.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default BasicTable;
