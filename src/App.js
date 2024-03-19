import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//style
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

//routes
import Sidebar from './components/Sidebar/Sidebar';
import Signin from './routes/Signin';
import Illegal from './routes/Illegal/Illegal';
import IllegalPopup from './routes/Illegal/IllegalPopup';
import Charge from './routes/Charge/Charge';
import ChargePopup from './routes/Charge/ChargePopup';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Sidebar />
        <Routes>
          <Route path="/charge/popup/:idx" element={<ChargePopup />} />
          <Route path="/charge" element={<Charge />} />
          <Route path="/illegal/popup/:idx" element={<IllegalPopup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Illegal />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
