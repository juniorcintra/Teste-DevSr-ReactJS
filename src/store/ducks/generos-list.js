import { createReducer, createActions } from "reduxsauce";
import update from "immutability-helper";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  listGenerosRequest: ["data"],
  listGenerosSuccess: ["data"],
  listGenerosFailure: ["error"],
});

export const ListGenerosTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
};

/* Reducers */

export const requestListGeneros = (state) =>
  update(state, { loading: { $set: true }, error: { $set: null } });

export const successListGeneros = (state, action) =>
  update(state, {
    loading: { $set: false },
    data: { $set: action.data },
  });

export const failureListGeneros = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LIST_GENEROS_REQUEST]: requestListGeneros,
  [Types.LIST_GENEROS_SUCCESS]: successListGeneros,
  [Types.LIST_GENEROS_FAILURE]: failureListGeneros,
});
