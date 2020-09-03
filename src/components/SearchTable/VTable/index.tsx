import React, { useEffect, useRef } from 'react';

import { AutoSizer, Table, Column, CellMeasurerCache } from 'react-virtualized'
import { Container, TableContainer } from './styles'
import { ItemData } from '../../../store/reducers/data/types';

interface Props {
  data: ItemData[]
  fixed: boolean
}

const cache = new CellMeasurerCache({
  defaultHeight: 36,
  // fixedHeight: true
});

const fixeWidth = 1025
const MyTable: React.FC<Props> = ({ data, fixed }) => {
  const tableRef = useRef<Table>(null)

  useEffect(() => {
    if (fixed) {
      setTimeout(() => {
        tableRef.current?.forceUpdate()
        tableRef.current?.forceUpdateGrid()
      })
    }
  }, [fixed])

  return <Container fixed={fixed}>
    <AutoSizer>
      {
        ({ width, height }) => (
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
              ref={tableRef}
            >
              <Column className='origin' label='origin' dataKey='origin' width={120} />
              <Column className='product' label='product' dataKey='product' width={140} />
              <Column className='type' label='type' dataKey='type' width={120} />
              <Column className='industry' label='industry' dataKey='industry' width={300} />
              <Column className='quantity' label='quantity' dataKey='quantity' width={120} />
              <Column className='price' label='price' dataKey='price' width={100} />
            </Table>
          </TableContainer>
        )
      }
    </AutoSizer>
  </Container>
}

export default MyTable