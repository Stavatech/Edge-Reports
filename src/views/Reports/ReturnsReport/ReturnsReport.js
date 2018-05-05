import React, { Component } from 'react';
import { connect } from 'react-redux';
import Widget from '../../../components/Widget';
import ReportFilter from '../../../components/ReportFilter';
import {
  Row,
  Col,
  Table,
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';

import { listProjects, generateReport, clearReportData } from '../../../actions';

class ReturnsReport extends Component {
  render() {
    let report = "";

    if (this.props.reportData && this.props.reportData.num_tasks) {
      report = this.renderReport(this.props.reportData);
    }

    return (
      <div className="animated fadeIn">
        <ReportFilter reportId="RW" withDateRange={false} {...this.props}/>
        {report}
      </div>
    )
  }

  renderReport(reportData) {
    let { num_tasks, num_reworks, reworks } = reportData;

    if (num_tasks == 0) {
      return this.renderNoData();
    }

    let aggregatedReport = this.renderAggregatedReport(num_tasks, num_reworks);

    let detailedReport = this.renderDetailedReport(reworks);

    return <div><div>{aggregatedReport}</div><div>{detailedReport}</div></div>;
  }

  renderNoData() {
    return (
      <Card>
        <CardBody>
          <Row>
            <Col xl="12">
              <strong>No data was found for the above filters. Please adjust the filters and try again.</strong>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }

  renderAggregatedReport(num_tasks, num_reworks) {
    let reworks_rate = (num_reworks/num_tasks)*100;
    let reworks_header = num_reworks + " (" + Math.round(reworks_rate) + "%)";

    return (
      <div>
        <Row name="aggregated-report">
          <Col xs={6}>
            <Widget header={num_tasks} children="Storyboards" />
          </Col>
          <Col xs={6}>
            <Widget header={reworks_header} children="Reworks Required" />
          </Col>
        </Row>
      </div>
    )
  };

  renderDetailedReport(reworks) {
    let rows = reworks.map((task) => {
      return <tr key={task.task_code}>
        <td>{task.module_id}</td>
        <td>{task.storyboard_by.name}</td>
        <td>{task.review_by.name}</td>
        <td>{task.assigned_to.name}</td>
      </tr>
    });

    return (
      <Card>
        <CardHeader>
        <i className="fa fa-users"></i> Tasks Requiring Reworks
        </CardHeader>
        <CardBody>
          <Row name="task-report">
            <Col xl="12">
              <Table hover striped responsive size="sm">
                <thead>
                  <tr>
                    <th>Learning Unit</th>
                    <th>Storyboard By</th>
                    <th>Internal Review By</th>
                    <th>Internal Review (2) By</th>
                  </tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
              </Table>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
};

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
  projectsLoading: state.projects.projectsLoading,
  reportLoading: state.reports.reportLoading,
  reportData: state.reports.reportData
});

const mapDispatchToProps = (dispatch) => ({
  listProjects: () => dispatch(
    listProjects()
  ),
  generateReport: (reportId, filters) => dispatch(
    generateReport(reportId, filters)
  ),
  clearReportData: () => dispatch(
    clearReportData()
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(ReturnsReport);
