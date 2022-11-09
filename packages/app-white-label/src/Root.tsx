import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StoreContext, store } from 'features/mobx';
import { MoniteProvider } from '@team-monite/ui-widgets-react';
import { MoniteApp } from '@team-monite/sdk-api';

import App from 'features/app/App';
import { AUTH_TOKEN_STORAGE_KEY } from 'features/app/consts';

const Root = () => {
  const monite = new MoniteApp({
    token:
      store.auth.authUserToken ||
      localStorage.getItem(AUTH_TOKEN_STORAGE_KEY) ||
      '',
    apiUrl: 'https://api.dev.monite.com/v1',
    locale: 'en',
    entityId: 'ec74ceb6-d1ef-4898-b5b3-d2520a52c073',
  });

  store.setMoniteApp(monite);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <MoniteProvider
            monite={monite}
            // REPLACE {} WITH CUSTOM THEME OBJECT OR SET INDIVIDUAL COLORS
            theme={{}}
          >
            <App />
          </MoniteProvider>
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default Root;
