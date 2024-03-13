import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import Wrapper from './components/Wrapper.jsx';
import Router from './Router.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Wrapper>
      <Router />
    </Wrapper>
  </Provider>
)
