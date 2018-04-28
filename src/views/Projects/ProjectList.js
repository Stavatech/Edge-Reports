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
      <tr key={project.project_code}  /*onClick={() => this.openProject(project.projectId)}*/>
        <td>{project.project_code}</td>
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
      <Table hover bordered striped responsive size="sm">
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
