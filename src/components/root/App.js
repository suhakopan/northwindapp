import React from 'react';
import { Container } from 'reactstrap';
import Navi from '../navi/Navi';
import Dashboard from './Dashboard';
import { Route, Switch } from 'react-router-dom'
import CartDetail from '../cart/CartDetail';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import NotFound from '../common/NotFound';

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/product"  component={Dashboard}/>
        <Route path="/cart"  component={CartDetail}/>
        <Route path="/edit/:productId" component={AddOrUpdateProduct}/>
        <Route path="/new" component={AddOrUpdateProduct}/>
        <Route component={NotFound}/>
      </Switch>
    </Container>
  );
}

export default App;
