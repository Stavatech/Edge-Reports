import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Route, NavLink} from 'react-router-dom';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';

import ProjectList from './ProjectList';
import CreateProjectForm from './CreateProjectForm';
import ProjectDetail from './ProjectDetail';

class Projects extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Projects
              </CardHeader>
              <CardBody>
                <Route exact path="/projects" name="Projects" component={ProjectList} />
                <Route path="/projects/new" name="Projects" component={CreateProjectForm} />
                <Route path="/projects/detail/:projectCode" name="Projects" component={ProjectDetail} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Projects;
