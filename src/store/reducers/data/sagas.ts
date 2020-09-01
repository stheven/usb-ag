import { call, put } from 'redux-saga/effects'
import * as api from '../../../services/api'
import { dataSuccess, dataFailure } from './actions'

export function* load() {
  try {
    const response = yield call(api.getData)

    yield put(dataSuccess(response))

  } catch (err) {
    yield put(dataFailure())
  }
}