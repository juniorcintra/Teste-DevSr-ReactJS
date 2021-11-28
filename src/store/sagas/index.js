import { all, takeLatest } from "redux-saga/effects";

//banner
import { ListLatestTypes } from "../ducks/latest-list";
import { getLatest } from "./banner";

//produtos
import { ListTypes } from "../ducks/filmes-list";
import { list } from "./filmes";

//ambientes
import { ListGenerosTypes } from "../ducks/generos-list";
import { listGeneros } from "./generos";

export default function* rootSaga() {
  yield all([
    //banner
    takeLatest(ListLatestTypes.GET_LATEST_REQUEST, getLatest),

    //generos
    takeLatest(ListGenerosTypes.LIST_GENEROS_REQUEST, listGeneros),

    //filmes
    takeLatest(ListTypes.LIST_REQUEST, list),
  ]);
}
