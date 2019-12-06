import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import AddMemoForm from '../components/AddMemo';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/addMemo" component={AddMemoForm} exact={true}/>
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;