import React from 'react';

import { AutoSizer, Table, Column } from 'react-virtualized'
import { Container, TableContainer } from './styles'
import { ItemData, Sort } from '../../../store/reducers/data/types';

type Props = {
  data: ItemData[]
  fixed: boolean
  handleSort(data: Sort): void
} & Sort

const fixeWidth = 1025

const MyTable: React.FC<Props> = ({ data, fixed, sortBy, sortDirection, handleSort }) => {
  return <Container fixed={fixed}>
    <AutoSizer>
      {({ width, height }) => (
        <TableContainer style={{
          width: fixed ? fixeWidth : width,
          height
        }}>
          <Table
            width={fixed ? fixeWidth : width}
            height={height}
            headerHeight={45}
            rowHeight={36}
            rowCount={data.length}
            rowGetter={({ index }) => data[index]}
            sort={handleSort}
            sortBy={sortBy}
            sortDirection={sortDirection}
          >
            <Column className='origin' label='origin' dataKey='origin' width={120} />
            <Column className='product' label='product' dataKey='product' width={140} />
            <Column className='type' label='type' dataKey='type' width={120} />
            <Column className='industry' label='industry' dataKey='industry' width={350} />
            <Column className='quantity' label='quantity' dataKey='quantity' width={80} />
            <Column className='price' label='price' dataKey='price' width={100} />
          </Table>
        </TableContainer>
      )
      }
    </AutoSizer>
  </Container>
}

export default MyTable