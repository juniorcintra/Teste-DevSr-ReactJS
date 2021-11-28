import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import listLatestActions from "../ducks/latest-list";

export function* getLatest() {
  try {
    const { data } = yield call(
      api.get,
      `/movie/popular?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR`
    );
    yield put(listLatestActions.getLatestSuccess(data.results));
  } catch (err) {
    yield put(listLatestActions.getLatestFailure(err));
  }
}
