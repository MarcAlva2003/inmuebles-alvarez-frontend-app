import { GlobalStyles } from './ui/styles/global-styles';
import { PublicRoutes } from './routes/public-routes';
import React from 'react';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <PublicRoutes/>
    </div>
  );
}

export default App;
