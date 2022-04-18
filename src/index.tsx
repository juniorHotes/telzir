import React from 'react';
import ReactDOM from 'react-dom';
import ReactRoutes from './ReactRoutes';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './assets/global-styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './assets/global-styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <ReactRoutes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
