import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//style
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

//routes
import Sidebar from './components/Sidebar/Sidebar';
import Signin from './routes/Signin';
import Illegal from './routes/Illegal';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Sidebar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Illegal />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
