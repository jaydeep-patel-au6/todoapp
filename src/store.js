import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { jokeReducer } from "./redux/reducers/jokeReducer";

const rootReducer = combineReducers({
  jokeList: jokeReducer,
});

const intialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
