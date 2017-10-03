
// import registerServiceWorker from './registerServiceWorker';

// import React from 'react'
// import ReactDOM from 'react-dom';

// import { render } from 'react-dom';

// import App from './components/App';
import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

render(
  <Root />,
  document.getElementById('root')
)