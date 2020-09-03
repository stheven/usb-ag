import React, { useLayoutEffect, useState, useCallback } from 'react';

import { Container, Button } from './styles';
import Table from './VTable';
import Filter from './Filter';
import { ApplicationState } from '../../store'
import { useSelector, useDispatch } from 'react-redux';
import { dataLoading, dataFilter } from '../../store/reducers/data/actions'

const SearchTable: React.FC = () => {
  const data = useSelector((state: ApplicationState) => state.data)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(dataLoading())
  }, [dispatch])

  const handleFilter = useCallback((value?: string) => {
    if (value !== undefined) {
      dispatch(dataFilter(value))
    }
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

    {!!data.data.length && <Table data={data.data} fixed={!responsive} />}

    {(!data.data.length && !data.loading) && <>Não há dados para exibir</>}
  </Container>
}

export default SearchTable;