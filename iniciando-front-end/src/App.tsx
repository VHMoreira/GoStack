import React from 'react';
import GlobalStyle from './styles/global';
import Signin from './pages/Signin';
// import Signup from './pages/Signup';

import { AuthProvider } from './hooks/AuthContext';
import ToastContainer from './components/ToastContainer';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Signin />
    </AuthProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
);
export default App;
