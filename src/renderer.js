import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Phone from './modules/Phone';
import App from './containers/App';
import apiConfig from './config/api';
import brandConfig from './config/brand';
import version from './config/version';
import prefix from './config/prefix';
import Logo from './assets/images/VIE_Logo_RC.svg';
const phone = new Phone({
  apiConfig,
  brandConfig,
  prefix,
  appVersion: version,
});

const store = createStore(phone.reducer);

phone.setStore(store);

window.phone = phone;

ReactDOM.render(
  <App
    phone={phone}
    logo={Logo}
  />,
  document.querySelector('div#viewport'),
);

