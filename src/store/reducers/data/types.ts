import { SortDirectionType } from "react-virtualized";

export enum DataTypes {
  LOADING = '@data/loading',
  SUCCESS = '@data/success',
  FAILURE = '@data/failure',
  FILTER_DATA = '@data/filter_data',
}

export interface ItemData {
  product: string
  quantity: number
  price: string
  type: string
  industry: string
  origin: string
}

export interface Sort {
  sortBy: string
  sortDirection: SortDirectionType
}

export interface DataState {
  readonly data: ItemData[]
  readonly loading: boolean
}