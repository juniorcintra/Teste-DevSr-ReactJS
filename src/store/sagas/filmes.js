import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import ListActions from "../ducks/filmes-list";

export function* list(request) {
  let page = request.data;
  try {
    const { data } = yield call(
      api.get,
      `/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=${page}`
    );
    yield put(ListActions.listSuccess(data.results));
  } catch (err) {
    yield put(ListActions.listFailure(err));
  }
}
