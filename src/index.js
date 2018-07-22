import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Svg from './Svg';
import Canvas from './Canvas';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <Router>
    <div>
       <ul>
        <li>
          <Link to="/svg">svg</Link>
        </li>
        <li>
          <Link to="/canvas">canvas</Link>
        </li>
      </ul>
      <Route exact path='/svg' component={Svg} />
      <Route exact path='/canvas' component={Canvas} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
