/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import './styles/styles.css';
import '../node_modules/toastr/build/toastr.min.css';
import App from './components/App';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {loadUserBaby} from './actions/userBabyActions';
import {loadBabyMeasures} from "./actions/measuresActions";

const store = configureStore();
store.dispatch(loadUserBaby());
store.dispatch(loadBabyMeasures());

render(<Provider store={store}>
        <App/>
      </Provider>,
  document.getElementById('app')
);
