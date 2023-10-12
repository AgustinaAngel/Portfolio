// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Sreens/Home';
import Componente1 from './components/Componente1';
import Componente2 from './components/Componente2';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/componente1" component={Componente1} />
          <Route path="/componente2" component={Componente2} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
