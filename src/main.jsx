// import 'bootstrap/dist/css/bootstrap.min.css';

import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles';
import './index.css';
import { App } from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/StudiumPro">
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
