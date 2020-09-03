import { call, put } from 'redux-saga/effects'
import * as api from '../../../services/api'
import { dataSuccess, dataFailure } from './actions'
import { ItemData } from './types'

export function* load(action: any) {
  try {
    let filter = String(action?.payload?.filter || "");
    let response: ItemData[] = yield call(api.getData)

    if (filter) {
      filter = filter.toLowerCase()
      response = response.filter(item => item.product.toLowerCase().includes(filter) || item.origin.toLowerCase().includes(filter))
    }

    yield put(dataSuccess(response))

  } catch (err) {
    yield put(dataFailure())
  }
}