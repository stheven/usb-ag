import React from 'react';

import { AutoSizer, Table, Column } from 'react-virtualized'
import { Container } from './styles'
import { ItemData } from '../../../store/reducers/data/types';

interface Props {
  data: ItemData[]
}

const MyTable: React.FC<Props> = ({ data }) => {
  return <Container>
    <AutoSizer>
      {
        ({ width, height }) => <Table
          width={width}
          height={height}
          headerHeight={20}
          rowHeight={40}
          rowCount={data.length}
          rowGetter={({ index }) => data[index]}
        >
          <Column label='product' dataKey='product' width={100} />
          <Column label='quantity' dataKey='quantity' width={100} />
          <Column label='price' dataKey='price' width={100} />
          <Column label='type' dataKey='type' width={100} />
          <Column label='industry' dataKey='industry' width={100} />
          <Column label='origin' dataKey='origin' width={100} />
        </Table>
      }
    </AutoSizer>
  </Container>
}

export default MyTable