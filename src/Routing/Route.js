import React, {Component} from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../Components/navbar';
import search from '../Components/search';
import Book from '../Components/listbook';
import Detail from '../Components/detailbook'


class Home extends Component {
  render () {
    return (
      <div>
      <Router>
      <Redirect to="/book" />
      <Route exact path={"/book"} component={Navbar} />
      <Route exact path={"/book"} component={search} />
      <Route exact path={"/book"} component={Book} />
      <Route exact path={"/book/:idBook"} component={Detail} />
      </Router>
      </div>
    );
  }
}

export default Home;
