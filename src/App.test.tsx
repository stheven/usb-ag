import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('filtro', () => {
  test('Exibir mensagem caso não haja itens na tabela', async () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('frm-filter-input');
    fireEvent.input(input, {
      target: {
        value: 'teste'
      }
    })
    const message = getByTestId('empty-message')
    expect(message).toBeInTheDocument();
  });
})

