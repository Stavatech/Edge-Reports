import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  Table,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import ButtonWrapper from '../../components/ButtonWrapper';

import { getProject, uploadSpreadsheet } from '../../actions';

class ProjectDetail extends Component {
  state = {
    spreadsheet: ''
  }

  handleChange = (event) => {
    this.setState({...this.state, spreadsheet: event.target.files});
  }

  onSubmit = (event) => {
    event.preventDefault();

    let projectCode = this.props.match.params.projectCode;

    this.props.uploadSpreadsheet(projectCode, this.state.spreadsheet[0]);
  }

  componentDidMount() {
    let projectCode = this.props.match.params.projectCode;
    this.props.getProject(projectCode);
  }

  render() {
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
          <strong>Loading project details...</strong>
        </Row>
      </div>
    );
  };

  renderProjectDetails() {
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
        <Col xs="12">
          <Form onSubmit={this.onSubmit}>
            <FormGroup row>
              <Label>Project spreadsheet:</Label>
              <Input type="file" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup row>
              <Button color="primary" className="px-4" onClick={this.onSubmit}>
                <i className="fa fa-upload"></i> Upload
              </Button>
            </FormGroup>
          </Form>
        </Col>
        <hr/>
        <Table hover striped responsive size="sm">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let projectsState = state.projects;
  let uploadsState = state.uploads;

  return {
    project: projectsState.selectedProject,
    loading: projectsState.projectLoading || uploadsState.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProject: (projectCode) => dispatch(
      getProject(projectCode)
    ),
    uploadSpreadsheet: (projectCode, spreadsheet) => dispatch(
      uploadSpreadsheet(projectCode, spreadsheet)
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetail);
