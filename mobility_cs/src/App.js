import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//style
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

//routes
import PrivateRoute from './routes/PrivateRoute';
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

import Guide from './routes/Guide';
import Policy from './routes/Policy';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/guide" element={<Guide />} />

          <Route element={<PrivateRoute />}>
            <Route path="/monthly" element={<Monthly />} />
            <Route path="/issue/popup/:idx" element={<IssuePopup />} />
            <Route path="/issue" element={<Issue />} />
            <Route path="/charge/popup/:idx" element={<ChargePopup />} />
            <Route path="/charge" element={<Charge />} />
            <Route path="/another/popup/:idx" element={<AnotherPopup />} />
            <Route path="/another" element={<Another />} />
            <Route path="/illegal/popup/:idx" element={<IllegalPopup />} />
            <Route path="/" element={<Illegal />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
