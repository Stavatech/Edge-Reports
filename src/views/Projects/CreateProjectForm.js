import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import ButtonWrapper from '../../components/ButtonWrapper';
import ButtonLink from '../../components/ButtonLink';

import { saveProject } from '../../actions';

class CreateProjectForm extends Component {
  state = {
    projectId: '',
    projectName: '',
    deadline: ''
  };

  updateProjectId = (e) => {
    this.setState({...this.state, projectId: e.target.value});
  };

  updateProjectName = (e) => {
    this.setState({...this.state, projectName: e.target.value});
  };

  updateDeadline = (e) => {
    this.setState({...this.state, deadline: e.target.value});
  };

  saveProject = () => {
    this.props.saveProject(
      this.state.projectId,
      this.state.projectName,
      this.state.deadline
    );
  };

  render() {
    return <div className="animated fadeIn">
      <FormGroup row>
        <Col xl="12">
          <Label htmlFor="projectId">Project ID</Label>
          <Input type="text" id="projectId" value={this.state.projectId} onChange={this.updateProjectId} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col xl="12">
          <Label htmlFor="projectName">Project Name</Label>
          <Input type="text" id="projectName" value={this.state.projectName} onChange={this.updateProjectName} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col xl="12">
          <Label htmlFor="deadline">Deadline</Label>
          <Input type="date" id="deadline" value={this.state.deadline} onChange={this.updateDeadline} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col xl="12">
          <ButtonWrapper>
            <ButtonLink color="primary" onClick={this.saveProject}>
              <i className="fa fa-save"></i> Save
            </ButtonLink>
            <ButtonLink color="secondary" href="/projects" style={{marginLeft: "4px"}}>
              <i className="fa fa-ban"></i> Back
            </ButtonLink>
          </ButtonWrapper>
        </Col>
      </FormGroup>
    </div>
  };
};

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    saveProject: (projectId, projectName, deadline) => dispatch(
      saveProject(projectId, projectName, deadline)
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProjectForm);