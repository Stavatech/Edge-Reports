import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Button,
  Input
} from 'reactstrap';
import DatePicker from 'react-date-picker';

class ReportFilter extends Component {
  state = {
    projectCode: undefined,
    startDate: new Date(),
    endDate: new Date()
  };

  componentDidMount() {
    this.props.clearReportData();
    this.props.listProjects();
  }

  setStartDate = startDate => this.setState({ startDate });
  setEndDate = endDate => this.setState({ endDate });
  setProjectCode = (event) => {
    console.log(event.target.value)
    this.setState({...this.state, projectCode: event.target.value });
  };

  onSubmit = () => {
    event.preventDefault();

    let filters = {
      deadline__gte: this.state.startDate,
      deadline__lte: this.state.endDate
    };

    if (this.state.projectCode && this.state.projectCode !== 'any') {
      filters['module__course__project__project_code'] = this.state.projectCode;
    };

    this.props.generateReport(this.props.reportId, filters);
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <i className="fa fa-filter"></i> Report Criteria
        </CardHeader>
        <CardBody>
          {
            this.props.projectsLoading || this.props.reportLoading
              ? this.renderSpinner()
              : this.renderFilters()
          }
        </CardBody>
      </Card>
    );
  };

  renderSpinner() {
    return (
      <div>
        <Row className="justify-content-center">
          <i className="fa fa-circle-o-notch fa-spin fa-3x"></i>
        </Row>
        <Row className="justify-content-center" style={{paddingTop:10}}>
          <strong>Generating report...</strong>
        </Row>
      </div>
    );
  };

  renderFilters() {
  let projectOptions = [<option key="any" value="any">Any</option>];

    this.props.projects.forEach((project) => {
      projectOptions.push(<option key={project.project_code} value={project.project_code}>{project.name}</option>);
    }, this);

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup row>
          <div className="dateContainer">
            <Label htmlFor="projectCode">Project:</Label> <br/>
            <Input type="select" name="project" id="projectCode" bsSize="sm" value={this.state.projectCode} onChange={this.setProjectCode}>
              {projectOptions}
            </Input>
          </div>
          <div className="dateContainer">
            <Label htmlFor="startDate">Start date:</Label> <br/>
            <DatePicker
                id="startDate"
                onChange={this.setStartDate}
                value={this.state.startDate}
              />
          </div>
          <div className="dateContainer">
            <Label htmlFor="endDate">End date:</Label> <br/>
            <DatePicker
                onChange={this.setEndDate}
                value={this.state.endDate}
              />
          </div>
        </FormGroup>
        <FormGroup row>
          <div className="dateContainer">
            <Button color="primary" className="px-4" onClick={this.onSubmit}>
              <i className="fa fa-cogs"></i> Generate Report
            </Button>
          </div>
        </FormGroup>
      </Form>
    );
  };
};

export default ReportFilter;
