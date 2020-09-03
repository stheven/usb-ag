import { call, put } from 'redux-saga/effects'
import * as api from '../../../services/api'
import { dataSuccess, dataFailure } from './actions'
import { ItemData, Sort } from './types'
import { sortBy as _sortBy } from 'lodash'
import { SortDirection } from 'react-virtualized'

export function* load(action: any) {
  try {
    let filter = String(action?.payload?.filter || "");
    let response: ItemData[] = yield call(api.getData)
    const sort = action?.payload?.sort as Sort

    if (filter) {
      filter = filter.toLowerCase()
      response = response.filter(item => item.product.toLowerCase().includes(filter) || item.origin.toLowerCase().includes(filter))
    }

    if (sort) {
      const { sortBy, sortDirection } = sort
      console.log(sort)
      const tempList = _sortBy(response, (item: ItemData) => item[sortBy as keyof ItemData]);
      response = sortDirection === SortDirection.DESC ? tempList.reverse() : tempList
    }

    yield put(dataSuccess(response))

  } catch (err) {
    yield put(dataFailure())
  }
}