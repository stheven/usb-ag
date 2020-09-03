import styled from 'styled-components';

import * as TableStyles from './VTable/styles'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 0;

  position: relative;
  width: calc(100% - 100px);
  margin: 0 auto;
  max-width: 1100px;
  
  @media screen and (max-width: 767px) {
    width: calc(100% - 20px);
  }

  ${() => TableStyles.Container} {
    min-height: calc(100% - 40px);
  }
`;

export const Button = styled.button.attrs({ type: 'button' })`
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 25px;
    right: 10px;
    margin: 0;
  }
  appearance: none;
  display: block;
  width: calc(100% - 20px);
  max-width: 120px;
  border: none;
  background: #6c7ae0;
  padding: 6px;
  margin: -10px auto 20px;
  border-radius: 20px;
  color: #fff;
  font-size: 13px;
  letter-spacing: 0.2px;
  cursor: pointer;
  transition: .25s ease;
  &:hover {
    background: #5664ca;
  }
`