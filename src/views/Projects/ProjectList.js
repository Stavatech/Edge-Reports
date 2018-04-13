import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  Table,
  Button
} from 'reactstrap';
import ButtonWrapper from '../../components/ButtonWrapper';

import { listProjects } from '../../actions';

class ProjectList extends Component {
  componentWillUpdate () {
    const { router } = this.context;
    this.router = router;
  }

  componentDidMount() {
    if(!this.props.projectsLoaded) {
      this.props.listProjects();
    }
  }

  openProject = (id) => {
    this.router.transition("/projects/detail/" + id);
  }

  render() {
    let rows = this.props.projects.map((project) => (
      <tr key={project.projectId}  onClick={() => this.openProject(project.projectId)}>
        <td>{project.projectId}</td>
        <td>{project.projectName}</td>
        <td>{project.deadline}</td>
        <td>{project.status}</td>
      </tr>
    ));

    return <div className="animated fadeIn">
      <ButtonWrapper>
        <Button color="primary" href="/#/projects/new" >
          New Project
        </Button>
      </ButtonWrapper>
      <Table hover bordered striped responsive size="sm">
        <thead>
          <tr>
            <th>Project ID</th>
            <th>Project Name</th>
            <th>Deadline</th>
            <th>Status</th>
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
  return {
    projects: state.projects.projects,
    projectsLoaded: state.projects.projectsLoaded
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
