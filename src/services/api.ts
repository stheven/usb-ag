import * as dataJSON from '../data/data_full.json'

export const getData = () => {
  return (dataJSON as any)?.default?.data || []
}
