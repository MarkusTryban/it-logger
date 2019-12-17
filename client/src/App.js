import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';

const App = () => {
  useEffect(() => {
    // Init materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
