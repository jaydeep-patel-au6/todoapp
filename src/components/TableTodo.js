import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "../helper/TabelStyles";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TableTodo = ({ rows, setRows }) => {
  const [isEdit, setEdit] = useState(false);
  const [disable, setDisable] = useState(true);

  const handleAdd = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        taskName: "",
        description: "",
        startTime: "",
        endTime: "",
        status: "",
      },
    ]);
    setEdit(false);
  };

  const handleEdit = (i) => {
    setEdit(!isEdit);
  };

  const handleSave = () => {
    setEdit(!isEdit);
    setRows(rows);
    setDisable(true);
  };

  const handleInputChange = (e, index) => {
    setDisable(false);
    const { name, value } = e.target;
    const list = [...rows];
    list[index][name] = value;
    setRows(list);
  };

  const handleRemoveClick = (i) => {
    const list = [...rows];
    list.splice(i, 1);
    setRows(list);
  };

  return (
    <div>
      <div className="flex items-center justify-center m-3">
        <button
          className="flex items-center justify-center m-3 cursor-pointer"
          onClick={handleAdd}
        >
          <AddIcon className="scale-150" /> <p className="ml-1">Add</p>
        </button>
        {isEdit ? (
          <button
            className={`flex items-center justify-center m-3 cursor-pointer ${
              rows.length === 0 ? "hidden" : null
            }`}
            onClick={handleEdit}
          >
            <EditIcon className="scale-125" /> <p className="ml-1">Edit</p>
          </button>
        ) : (
          <button
            disable={disable.toString()}
            className={`${
              disable ? null : null
            } flex items-center justify-center m-3 cursor-pointer ${
              rows.length === 0 ? "hidden" : null
            }`}
            onClick={handleSave}
          >
            <SaveIcon className="scale-150" /> <p className="ml-1">Save</p>
          </button>
        )}
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Id</StyledTableCell>
              <StyledTableCell align="center">Task Name</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center">Start Time</StyledTableCell>
              <StyledTableCell align="center">End Time</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Delete Todo</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows?.map((row, idx) => (
              <StyledTableRow key={idx}>
                <StyledTableCell align="center" component="th" scope="row">
                  {idx + 1}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {isEdit ? (
                    <>{row?.taskName ? row?.taskName : "NA"}</>
                  ) : (
                    <>
                      <Input
                        placeholder="Task Name"
                        value={row?.taskName}
                        name="taskName"
                        onChange={(e) => handleInputChange(e, idx)}
                      />
                    </>
                  )}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {isEdit ? (
                    <>{row?.description ? row?.description : "NA"}</>
                  ) : (
                    <>
                      <Input
                        placeholder="Description"
                        value={row?.description}
                        name="description"
                        onChange={(e) => handleInputChange(e, idx)}
                      />
                    </>
                  )}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {isEdit ? (
                    <>{row?.startTime ? row?.startTime : "NA"}</>
                  ) : (
                    <>
                      <TextField
                        id="datetime-local"
                        label="Start Time"
                        type="datetime-local"
                        value={row.startTime}
                        name="startTime"
                        onChange={(e) => handleInputChange(e, idx)}
                        sx={{ width: 250 }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </>
                  )}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {isEdit ? (
                    <>{row?.endTime ? row?.endTime : "NA"}</>
                  ) : (
                    <>
                      <TextField
                        id="datetime-local"
                        label="End Time"
                        type="datetime-local"
                        value={row.endTime}
                        name="endTime"
                        onChange={(e) => handleInputChange(e, idx)}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </>
                  )}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {isEdit ? (
                    <>{row?.status ? row?.status : "NA"}</>
                  ) : (
                    <>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={row.status}
                        name="status"
                        onChange={(e) => handleInputChange(e, idx)}
                      >
                        <MenuItem value="Scheduled">Scheduled</MenuItem>
                        <MenuItem value="Running">Running</MenuItem>
                        <MenuItem value="Expired">Expired</MenuItem>
                      </Select>
                    </>
                  )}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <button onClick={() => handleRemoveClick(idx)}>
                    <DeleteIcon />
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableTodo;
