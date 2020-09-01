import { Reducer } from 'redux'
import { DataState, DataTypes } from './types'

const INITIAL_STATE: DataState = {
  data: [],
  loading: true
}

const reducer: Reducer<DataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DataTypes.LOADING:
      return {
        ...state,
        data: [],
        loading: action.payload.loading
      }
    case DataTypes.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      }
    case DataTypes.FAILURE:
      return {
        ...state,
        data: [],
        loading: false
      }
    default:
      return state
  }
}

export default reducer