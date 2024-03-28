import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//style
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

//routes
import Sidebar from './components/Sidebar/Sidebar';
import Signin from './routes/Signin';
import Illegal from './routes/Time/Illegal/Illegal';
import IllegalPopup from './routes/Time/Illegal/IllegalPopup';
import Another from './routes/Time/Another/Another';
import AnotherPopup from './routes/Time/Another/AnotherPopup';
import Charge from './routes/Fixed/Charge/Charge';
import ChargePopup from './routes/Fixed/Charge/ChargePopup';
import Issue from './routes/Fixed/Issue/Issue';
import IssuePopup from './routes/Fixed/Issue/IssuePopup';
import Monthly from './routes/Monthly/Monthly';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Sidebar />
        <Routes>
          <Route path="/monthly" element={<Monthly />} />
          <Route path="/issue/popup/:idx" element={<IssuePopup />} />
          <Route path="/issue" element={<Issue />} />
          <Route path="/charge/popup/:idx" element={<ChargePopup />} />
          <Route path="/charge" element={<Charge />} />
          <Route path="/another/popup/:idx" element={<AnotherPopup />} />
          <Route path="/another" element={<Another />} />
          <Route path="/illegal/popup/:idx" element={<IllegalPopup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Illegal />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
