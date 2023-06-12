import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Adicione outras rotas aqui, como a página de detalhes do produto, carrinho, etc. */}
      </Switch>
    </Router>
  );
};

export default App;
