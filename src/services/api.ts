import * as dataJSON from '../data/data_full.json'
import { ItemData } from '../store/reducers/data/types'

export const getData = (): ItemData[] => {
  return (dataJSON as any)?.default?.data || []
}
