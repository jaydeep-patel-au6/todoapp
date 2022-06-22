import React, { useEffect, useState } from "react";
import { navigate, useLocation } from "@reach/router";
import TableView from "../components/TableView";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Header from "../components/Header";

const ViewTask = () => {
  const [task, setTask] = useState();
  const [checkSort, setCheckSort] = useState(true);
  const [checkSort2, setCheckSort2] = useState(true);
  const [query, setQuery] = useState("");
  const history = useLocation();
  const data = history?.state;

  useEffect(() => {
    if (checkSort2) {
      setTask(
        Object.keys(data).map((key) => {
          return data[key];
        })
      );
    } else {
      const sortName = [...task].sort((a, b) => {
        if (a.taskName < b.taskName) {
          return -1;
        }
        if (a.taskName > b.taskName) {
          return 1;
        }
        return 0;
      });
      setTask(sortName);
    }
  }, [checkSort]);

  const handleClick = () => {
    setCheckSort(!checkSort);
    setCheckSort2(!checkSort2);
  };

  return (
    <>
      <Header leftText="Todo List" />
      <div className="m-5">
        <h1 className="text-2xl font-semibold m-5 text-center">View Task</h1>
        <div className="flex items-center justify-between m-5">
          <div className="m-4">
            <TextField
              id="filled-basic"
              label="Search by Name"
              variant="filled"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Button variant="contained" color="success" onClick={handleClick}>
            Sort by Name
          </Button>
        </div>

        <TableView
          rows={task?.filter((post) => {
            if (query === "") {
              return post;
            } else if (
              post?.taskName?.toLowerCase()?.includes(query.toLowerCase())
            ) {
              return post;
            }
          })}
        />
      </div>
    </>
  );
};

export default ViewTask;
