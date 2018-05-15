import React, { Component } from 'react';
import {connect} from 'react-redux';
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
    projectCode: '',
    name: '',
    description: '',
    deadline: new Date()
  };

  updateProjectCode = (e) => {
    this.setState({...this.state, projectCode: e.target.value});
  };

  updateProjectName = (e) => {
    this.setState({...this.state, name: e.target.value});
  };

  updateDescription = (e) => {
    this.setState({...this.state, description: e.target.value});
  };

  updateDeadline = (e) => {
    this.setState({...this.state, deadline: e.target.value});
  };

  saveProject = () => {
    this.props.saveProject(
      this.state.projectCode,
      this.state.name,
      this.state.description,
      this.state.deadline
    );
  };

  render() {
    return <div className="animated fadeIn">
      <FormGroup row>
        <Col xl="12">
          <Label htmlFor="projectId">Project ID</Label>
          <Input type="text" id="projectId" value={this.state.projectCode} onChange={this.updateProjectCode} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col xl="12">
          <Label htmlFor="projectName">Name</Label>
          <Input type="text" id="projectName" value={this.state.name} onChange={this.updateProjectName} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col xl="12">
          <Label htmlFor="description">Description</Label>
          <Input type="text" id="description" value={this.state.description} onChange={this.updateDescription} />
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
    saveProject: (projectId, projectName, description, deadline) => dispatch(
      saveProject(projectId, projectName, description, deadline)
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProjectForm);