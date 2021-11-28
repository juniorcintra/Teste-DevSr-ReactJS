import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import ListGenerosActions from "../ducks/generos-list";

export function* listGeneros(request) {
  let page = request.data;
  try {
    const { data } = yield call(
      api.get,
      `/genre/movie/list?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=${page}`
    );
    yield put(ListGenerosActions.listGenerosSuccess(data.genres));
  } catch (err) {
    yield put(ListGenerosActions.listGenerosFailure(err));
  }
}
