import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  Table,
  Button
} from 'reactstrap';
import ButtonWrapper from '../../components/ButtonWrapper';
import { Link } from 'react-router-dom';

import { listProjects } from '../../actions';

class ProjectList extends Component {
  componentDidMount() {
    this.props.listProjects();
  }

  render() {
    let rows = this.props.projects.map((project) => (
      <tr key={project.project_code}>
        <td><Link to={"/projects/detail/" + project.project_code}>{project.project_code}</Link></td>
        <td>{project.name}</td>
        <td>{project.description}</td>
        <td>{project.deadline}</td>
      </tr>
    ));

    return <div className="animated fadeIn">
      <ButtonWrapper>
        <Button color="primary" href="/#/projects/new" >
          New Project
        </Button>
      </ButtonWrapper>
      <Table hover striped responsive size="sm">
        <thead>
          <tr>
            <th>Project Code</th>
            <th>Project Name</th>
            <th>Description</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    </div>
  }
}

const mapStateToProps = state => {
  let projectsState = state.projects;

  return {
    projects: projectsState.projects,
    projectsLoading: projectsState.projectsLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    listProjects: () => dispatch(
      listProjects()
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);
