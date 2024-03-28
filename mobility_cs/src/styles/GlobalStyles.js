import { createGlobalStyle } from 'styled-components';
import Reset from 'styled-reset';

// fonts
import Pretendard200 from './fonts/Pretendard200.woff';
import Pretendard300 from './fonts/Pretendard300.woff';
import Pretendard400 from './fonts/Pretendard400.woff';
import Pretendard500 from './fonts/Pretendard500.woff';
import Pretendard600 from './fonts/Pretendard600.woff';
import Pretendard700 from './fonts/Pretendard700.woff';
import Pretendard800 from './fonts/Pretendard800.woff';

const GlobalStyles = createGlobalStyle`
${Reset}

@font-face {
  font-family: 'Pretendard';
  src: local('Pretendard'), url(${Pretendard200}) format('woff');
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard';
  src: local('Pretendard'), url(${Pretendard300}) format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard';
  src: local('Pretendard'), url(${Pretendard400}) format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard';
  src: local('Pretendard'), url(${Pretendard500}) format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard';
  src: local('Pretendard'), url(${Pretendard600}) format('woff');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard';
  src: local('Pretendard'), url(${Pretendard700}) format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard';
  src: local('Pretendard'), url(${Pretendard800}) format('woff');
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}


:root {
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  line-height: inherit;
}

body {
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 14px;
  height: calc(var(--vh, 1vh) * 100);
  color: ${props => props.theme.fontColor};
  ::-webkit-scrollbar {
    display: none;
  }
}
a {
  text-decoration: none;
  color: inherit;
}
button {
  font-family: 'Pretendard', sans-serif;
  background: transparent;
  font-size: 14px;
  color: ${props => props.theme.fontColor};
  border: 0 none;
  outline:none;
  cursor: pointer;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
}
ol, ul, li {
  list-style: none;
}
select, option {
  background: transparent;
  font-family: 'Pretendard', sans-serif;
  // -webkit-appearance:none; /* for chrome */
  -moz-appearance:none; /*for firefox*/
  // appearance:none;
  color: ${props => props.theme.fontColor};
  font-size: 14px;
}
a, button, input {
  font-family: 'Pretendard', sans-serif;
  appearance: none;
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  -webkit-tap-highlight-color: transparent;
  outline:none;
  border: none;

}

`;

export default GlobalStyles;
