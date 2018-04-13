import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import InstructionalDesignersReport from '../../views/Reports/InstructionalDesignersReport/';
import InternalReviewsReport from '../../views/Reports/InternalReviewsReport/';
import ReturnsReport from '../../views/Reports/ReturnsReport/';
import Projects from '../../views/Projects/';
import Users from '../../views/Users/';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/design" name="InstructionalDesignersReport" component={InstructionalDesignersReport}/>
                <Route path="/reviews" name="InternalReviewsReport" component={InternalReviewsReport}/>
                <Route path="/returns" name="ReturnsReport" component={ReturnsReport}/>
                <Route path="/projects" name="Projects" component={Projects} />
                <Route path="/users" name="Users" component={Users}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
