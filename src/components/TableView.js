import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { StyledTableCell, StyledTableRow } from "../helper/TabelStyles";

export default function TableView({ rows }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="center">Task Name</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows?.length > 0 ? (
              <>
                {rows?.map((row, idx) => (
                  <>
                    {row?.id && (
                      <StyledTableRow key={idx}>
                        <StyledTableCell component="th" scope="row">
                          {row?.id}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row?.taskName ? row?.taskName : "NA"}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row?.description ? row?.description : "NA"}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <div className="flex items-center justify-center">
                            {row?.status ? row?.status : "NA"}
                          </div>
                        </StyledTableCell>
                      </StyledTableRow>
                    )}
                  </>
                ))}
              </>
            ) : (
              <div className="absolute top-1/2 left-1/2">No data found</div>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
