import React from 'react';
import { Provider } from 'react-redux'
import Layout from './components/Layout'
import Global from './styles/global'
import SearchTable from './components/SearchTable';
import store from './store';
import "react-virtualized/styles.css";

const App = () => {
  return <Provider store={store}>
    <Global />
    <Layout>
      <SearchTable />
    </Layout>
  </Provider>

}

export default App