import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { MainPage } from '@/pages/main';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FluentProvider theme={
webLightTheme
}>
      <MainPage />
    </FluentProvider>
  </React.StrictMode>,
);
