import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  Table,
  Button,
  Row
} from 'reactstrap';
import ButtonWrapper from '../../components/ButtonWrapper';
import { getProject } from '../../actions';

class ProjectDetail extends Component {
  componentDidMount() {
    console.log(this.props.match);
    let projectCode = this.props.match.params.projectCode;
    this.props.getProject(projectCode);
  }

  render() {
    console.log(this.props);
    return <div className="animated fadeIn">
      { this.props.loading || this.props.project === undefined
          ? this.renderSpinner()
          : this.renderProjectDetails()
      }
    </div>
  }

  renderSpinner() {
    return (
      <div>
        <Row className="justify-content-center">
          <i className="fa fa-circle-o-notch fa-spin fa-3x"></i>
        </Row>
        <Row className="justify-content-center" style={{paddingTop:10}}>
          <strong>Please wait while we sign you in...</strong>
        </Row>
      </div>
    );
  };

  renderProjectDetails() {
    console.log(this.props.project);
    let rows = this.props.project.courses.map((course) => (
      <tr key={course.course_code}>
        <td>{course.course_code}</td>
        <td>{course.name}</td>
        <td>{course.notes}</td>
      </tr>
    ));

  return (
    <div>
      <div className="h4 mb-0">{this.props.project.name}</div>
      <hr/>
    </div>);
  }
}

const mapStateToProps = state => {
  let projectsState = state.projects;
  console.log(projectsState);

  return {
    project: projectsState.selectedProject,
    loading: projectsState.projectLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProject: (projectCode) => dispatch(
      getProject(projectCode)
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetail);
