import React from "react";
import Header from "../components/Header";
import Button from "@mui/material/Button";
import { navigate } from "@reach/router";

const NotFound = () => {
  const handleClick1 = () => {
    navigate("/jokesSpot", { state: "" });
  };
  const handleClick2 = () => {
    navigate("/editTask", { state: "" });
  };
  return (
    <div>
      <Header leftText="Todo List" />
      <h1 className="text-center text-2xl font-semibold mt-10">Page not found please select one option...........!!</h1>
      <div className="flex items-center justify-center mt-20 flex-col md:flex-row">
        <div className="m-4">
          <Button variant="contained" color="success" onClick={handleClick1}>
            Go to Joke Page
          </Button>
        </div>
        <div className="m-4">
          <Button variant="contained" color="error" onClick={handleClick2}>
            Go to Todo Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
