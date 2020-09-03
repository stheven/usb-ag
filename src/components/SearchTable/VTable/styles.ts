import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow: hidden;
  width: 100%;
  flex: 1;

  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
`

export const Container = styled.div<{fixed: boolean}>`
  width: 100%;
  flex: 1;
  overflow: ${p => p.fixed ? "auto hidden" : 'hidden'};
  box-shadow: 0 0px 10px rgba(0,0,0,0.15);
  border-radius: 10px;
  
  .ReactVirtualized__Table {
    border-radius: 10px;
    overflow: hidden;
  }

  .ReactVirtualized__Table__headerRow {
    font-size: 16px;
    color: #fff;
    line-height: 1;
    background-color: #6c7ae0;
    .ReactVirtualized__Table__headerColumn {
      display: flex;
      text-transform: capitalize;
    }
  }
  .ReactVirtualized__Table__rowColumn,
  .ReactVirtualized__Table__headerColumn {
    &:nth-child(6) {
      text-align: right;
      justify-content: flex-end;
    }
    &:nth-child(5) {
      text-align: center;
      justify-content: center;
    }
  }

  .ReactVirtualized__Grid__innerScrollContainer {
    .ReactVirtualized__Table__row {
      font-size: 15px;
      color: #808080;
      line-height: 1.4;
      width: 100% !important;
      &:nth-child(even) {
        background-color: #f8f6ff;
      }
    }
  }
`;


export const TableHeader = styled.div`
  background-color: #6c7ae0;
  height: 50px;
  display: flex;
  align-items: center;
  ${() => TableColumn} {
    font-size: 18px;
    color: #fff;
    line-height: 1;
    text-transform: capitalize;
  }
`

export const TableRow = styled.div`
  display: flex;
  width: 100%;
  &:nth-child(even) {
    background-color: #f8f6ff;
  }
  ${() => TableColumn} {
    flex: 1;
  }
`

export const TableColumn = styled.div`
  font-size: 15px;
  color: #808080;
  line-height: 1.4;
  padding: 0 10px;
`