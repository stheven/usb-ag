import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    min-height: 100vh;
  }

  .row {
    display: flex;
    align-items: center;
  }

  .row > div {
    flex: 1;
  }
`