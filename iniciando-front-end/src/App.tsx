import React from 'react';
import GlobalStyle from './styles/global';
import Signin from './pages/Signin';
// import Signup from './pages/Signup';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Vitor' }}>
      <Signin />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);
export default App;
