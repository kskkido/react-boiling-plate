import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const render = (Component) => (
  ReactDOM.render(
    <div>
      <Component />
    </div>,
    document.getElementById('root')
  )
);

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(require('./components/App').default);
  });
}
