import React from 'react';

//style
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import SigninComponent from './components/Signin/SigninComponent';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SigninComponent />
    </ThemeProvider>
  );
}

export default App;
