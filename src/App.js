import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Adicione outras rotas aqui, como a página de detalhes do produto, carrinho, etc. */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
