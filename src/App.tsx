import React from 'react';

import Main from './pages/Main';

import GlobalStyle from './styles/global';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
