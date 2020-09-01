import React, { useLayoutEffect } from 'react';

import { Container } from './styles';
import Table from './Table';
import { ApplicationState } from '../../store'
import { useSelector, useDispatch } from 'react-redux';
import { dataLoading } from '../../store/reducers/data/actions'

const SearchTable: React.FC = () => {
  const data = useSelector((state: ApplicationState) => state.data)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(dataLoading())
  }, [dispatch])

  return <Container>
    <form onSubmit={() => { }}>
      <input type="text" />
      <button>Buscar</button>
    </form>

    {data.loading && <>Carregando</>}

    {!!data.data.length && <Table data={data.data} />}

    {(!data.data.length && !data.loading) && <>Não há dados para exibir</>}
  </Container>
}

export default SearchTable;