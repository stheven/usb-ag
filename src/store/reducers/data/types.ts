export enum DataTypes {
  LOADING = '@data/loading',
  SUCCESS = '@data/success',
  FAILURE = '@data/failure',
}

export interface ItemData {
  product: string
  quantity: number
  price: string
  type: string
  industry: string
  origin: string
}

export interface DataState {
  readonly data: ItemData[]
  readonly loading: boolean
}