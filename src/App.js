import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import UserName from './components/UserName';
import RepositoryList from './components/RepositoryList';
import MarkDownPreview from './components/MarkDownPreview';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <div className="container margin-top-20">
        <Switch>
          <Route exact path="/" component={UserName}></Route>
          <Route exact path="/repos/:userName" component={RepositoryList}></Route>
          <Route exact path="/repos/:userName/:mdFileName" component={MarkDownPreview}></Route>

        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
