import React, { useRef, useCallback } from 'react';

import { Container } from './styles';

interface Props {
  handleFilter(word?: string): void
}

const Filter: React.FC<Props> = ({ handleFilter }) => {
  const ref = useRef<HTMLInputElement>(null)

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleFilter(ref.current?.value)
  }, [handleFilter])

  return <Container onSubmit={handleSubmit} data-testid="frm-filter">
    <label htmlFor="search">Filtre por <strong>product</strong> ou <strong>origin</strong></label>
    <input id="search" ref={ref} type="text" data-testid="frm-filter-input" onInput={(e) => handleFilter(e.currentTarget.value)} autoComplete="off" placeholder="Digite para filtrar" />
  </Container>
}

export default Filter;