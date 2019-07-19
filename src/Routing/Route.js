import React, {Component} from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../Components/navbar';
import search from '../Components/search';
import Book from '../Components/listbook';
import Detail from '../Components/detailbook';
import Edit from '../Components/edit';


class Routing extends Component {
  render () {
    return (
      <div>
      <Router>
      <Redirect to="/book" />
      <Route exact path={"/book"} component={Navbar} />
      <Route exact path={"/book"} component={search} />
      <Route exact path={"/book"} component={Book} />
      <Route path={"/book/:idBook"} component={Detail} />
      <Route exact path={"/book/:idBook/edit"} component={Edit} />
      </Router>
      </div>
    );
  }
}

export default Routing;
