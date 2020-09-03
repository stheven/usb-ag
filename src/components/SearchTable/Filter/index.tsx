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

  return <Container>
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Filtre por <strong>product</strong> ou <strong>origin</strong></label>
      <input id="search" ref={ref} type="text" onInput={(e) => handleFilter(e.currentTarget.value)} autoComplete="off" placeholder="Digite para filtrar" />
    </form>
  </Container>
}

export default Filter;