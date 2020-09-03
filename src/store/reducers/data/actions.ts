import { action } from 'typesafe-actions'

import { DataTypes, ItemData } from './types'

export const dataLoading = (loading = true) => action(DataTypes.LOADING, { loading })
export const dataSuccess = (data: ItemData[]) => action(DataTypes.SUCCESS, { data })
export const dataFailure = () => action(DataTypes.FAILURE)
export const dataFilter = (filter: string) => action(DataTypes.FILTER_DATA, { filter })