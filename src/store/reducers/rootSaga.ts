import { all, takeLatest } from 'redux-saga/effects'
import { DataTypes } from './data/types'
import { load } from './data/sagas'

export default function* rootSaga() {
  return yield all([
    takeLatest(DataTypes.LOADING, load),
    takeLatest(DataTypes.FILTER_DATA, load)
  ])
}