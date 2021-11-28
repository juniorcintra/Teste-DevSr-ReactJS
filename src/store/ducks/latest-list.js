import { createReducer, createActions } from "reduxsauce";
import update from "immutability-helper";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getLatestRequest: ["data"],
  getLatestSuccess: ["data"],
  getLatestFailure: ["error"],
});

export const ListLatestTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  dataLatest: null,
  loadingLatest: false,
  errorLatest: null,
};

/* Reducers */

export const requestGetLatest = (state) =>
  update(state, { loadingLatest: { $set: true }, errorLatest: { $set: null } });

export const successGetLatest = (state, action) =>
  update(state, {
    loadingLatest: { $set: false },
    dataLatest: { $set: action.data },
  });

export const failureGetLatest = (state, action) =>
  update(state, {
    loadingLatest: { $set: false },
    erroLatestr: { $set: action.error },
  });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_LATEST_REQUEST]: requestGetLatest,
  [Types.GET_LATEST_SUCCESS]: successGetLatest,
  [Types.GET_LATEST_FAILURE]: failureGetLatest,
});
