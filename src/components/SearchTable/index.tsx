import React, { useLayoutEffect, useState, useCallback } from 'react';

import { Container, Button } from './styles';
import Table from './VTable';
import Filter from './Filter';
import { ApplicationState } from '../../store'
import { useSelector, useDispatch } from 'react-redux';
import { dataLoading, dataFilter } from '../../store/reducers/data/actions'
import { SortDirectionType, SortDirection } from 'react-virtualized';
import { Sort } from '../../store/reducers/data/types';

const SearchTable: React.FC = () => {
  const [sortBy, setSortBy] = useState('')
  const [sortDirection, setSortDirection] = useState<SortDirectionType>(SortDirection.ASC)
  const data = useSelector((state: ApplicationState) => state.data)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(dataLoading())
  }, [dispatch])

  const handleFilter = useCallback((value?: string) => {
    if (value !== undefined) {
      dispatch(dataFilter(value, {
        sortBy,
        sortDirection
      }))
    }
  }, [dispatch, sortBy, sortDirection])

  const handleSort = useCallback(({ sortBy, sortDirection }: Sort) => {
    dispatch(dataFilter(undefined, {
      sortBy,
      sortDirection
    }))

    setSortBy(sortBy)
    setSortDirection(sortDirection)

  }, [dispatch])

  const [responsive, setResponse] = useState(false)

  const handleToggleResponsive = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setResponse(responsive => !responsive)
  }, [])

  return <Container>
    <Filter handleFilter={handleFilter} />

    <Button onClick={handleToggleResponsive}>
      {!responsive ? 'Tamanho fixo' : 'Responsivo'}?
    </Button>

    {data.loading && <>Carregando</>}

    {!!data.data.length && <Table
      data={data.data}
      fixed={!responsive}
      handleSort={handleSort}
      sortBy={sortBy}
      sortDirection={sortDirection}
    />}

    {(!data.data.length && !data.loading) && <>Não há dados para exibir</>}
  </Container>
}

export default SearchTable;