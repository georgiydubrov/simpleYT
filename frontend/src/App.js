import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Upload, Main } from './components';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/upload" component={Upload} />
      </Switch>
    </Router>
  );
}

export default App;
