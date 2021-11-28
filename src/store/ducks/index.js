import { combineReducers } from "redux";
import { reducer as filmesList } from "./filmes-list";
import { reducer as generosList } from "./generos-list";
import { reducer as latestList } from "./latest-list";

const reducers = combineReducers({
  filmesList,
  generosList,
  latestList,
});

export default reducers;
