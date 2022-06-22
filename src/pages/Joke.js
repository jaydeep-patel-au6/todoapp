import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jokeAction } from "../redux/actions/jokeAction";
import JokeTable from "../components/JokeTable";

const Joke = () => {
  const [isloading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const jokeList = useSelector((state) => state.jokeList);
  const { loading, jokes, error } = jokeList;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    dispatch(jokeAction());
  }, [dispatch]);
  return (
    <div className="m-5">
      <h1 className="text-2xl font-bold text-center underline m-5">Jokes</h1>
      <JokeTable rows={jokes} isloading={isloading} />
    </div>
  );
};

export default Joke;
