import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from "react-loader-spinner";
import { StyledTableCell, StyledTableRow } from "../helper/TabelStyles";

export default function JokeTable({ rows, isloading }) {
  return (
    <>
      {isloading && (
        <div className="absolute top-1/2 left-1/2 -mt-20">
          <BallTriangle
            heigth="100"
            width="100"
            color="grey"
            ariaLabel="loading-indicator"
          />
        </div>
      )}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="center">Category</StyledTableCell>
              <StyledTableCell align="center">Joke</StyledTableCell>
            </TableRow>
          </TableHead>
          {!isloading && (
            <TableBody>
              {rows?.map((row, idx) => (
                <StyledTableRow key={idx}>
                  <StyledTableCell component="th" scope="row">
                    <p
                      className={`font-semibold tracking-widest ${
                        idx % 2 === 0 ? "text-red-500" : "text-lime-500"
                      } `}
                    >
                      {" "}
                      {idx + 1}
                    </p>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <p
                      className={`font-semibold tracking-widest ${
                        idx % 2 === 0 ? "text-red-500" : "text-lime-500"
                      } `}
                    >
                      {" "}
                      {row?.category}
                    </p>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <p
                      className={`comicfont tracking-widest ${
                        idx % 2 === 0 ? "text-red-500" : "text-lime-500"
                      } `}
                    >
                      {row?.joke}
                    </p>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </>
  );
}
