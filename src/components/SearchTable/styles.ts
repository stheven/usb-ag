import styled from 'styled-components';

import * as TableStyles from './Table/styles'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  
  @media screen and (max-width: 767px) {
    padding: 20px 10px;
  }

  form {
    height: 40px;
    margin: 0 0 30px;
  }

  ${() => TableStyles.Container} {
    min-height: calc(100% - 40px);
  }
`;
