import React from 'react';
import './App.css';

import { SideBar } from './components/sideBare';
import { GlobalStyles } from './utils/GlobalStyles';

const App=()=> {
  return (
    <>
      <GlobalStyles />
      <SideBar />
    </>
  );
}

export default App;
