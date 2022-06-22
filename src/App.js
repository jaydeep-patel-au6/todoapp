import React, { Children } from "react";
import { Router, Redirect, navigate } from "@reach/router";
import Login from "./pages/Login";
import ViewTask from "./pages/ViewTask";
import Task from "./pages/Task";
import Joke from "./pages/Joke";
import NotFound from "./pages/NotFound";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return !!token ? children : <Redirect to="/auth/login" noThrow />;
};

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return !!token ? <Redirect to="/jokesSpot" noThrow /> : children;
};

function App() {
  return (
    <>
      <Router>
        <PublicRoute path="/auth">
          <Login path="/login" />
          <NotFound default />
        </PublicRoute>
        <ProtectedRoute path="/">
          <Joke path="/jokesSpot" />
          <Task path="/editTask" />
          <ViewTask path="/viewTasks" />
          <NotFound default />
        </ProtectedRoute>
      </Router>
    </>
  );
}

export default App;
