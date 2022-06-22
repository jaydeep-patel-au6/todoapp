import React, { useState } from "react";
import Header from "../components/Header";
import TableTodo from "../components/TableTodo";
import Button from "@mui/material/Button";
import { navigate } from "@reach/router";

const Task = () => {
  const [rows, setRows] = useState([]);

  const handleClick = () => {
    navigate("/viewTasks", { state: rows });
  };

  return (
    <div className="min-w-screen">
      <Header leftText="Todo List" />

      <div className="m-5">
        <TableTodo rows={rows} setRows={setRows} />
      </div>
      <div className="flex items-center justify-center mt-20">
        {rows?.length > 0 && (
          <Button variant="contained" color="success" onClick={handleClick}>
            Goto List Page
          </Button>
        )}
      </div>
    </div>
  );
};

export default Task;
