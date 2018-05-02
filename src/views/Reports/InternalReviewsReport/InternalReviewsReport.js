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

class InternalReviewsReport extends Component {
  render() {
    let report = "";

    if (this.props.reportData && this.props.reportData.length > 0) {
      report = this.renderReport(this.props.reportData);
    }

    return (
      <div className="animated fadeIn">
        <ReportFilter reportId="IE" {...this.props}/>
        {report}
      </div>
    )
  }

  renderReport(reportData) {
    let { num_tasks, deadlines_missed, avg_time_diff, avg_time_diff_missed } = reportData[0];
    let aggregatedReport = this.renderAggregatedReport(num_tasks, deadlines_missed, avg_time_diff, avg_time_diff_missed);

    let employeeReportData = reportData.slice(1);
    let employeeReport = this.renderEmployeeReport(employeeReportData);

    return <div><div>{aggregatedReport}</div><div>{employeeReport}</div></div>;
  }

  renderAggregatedReport(num_tasks, deadlines_missed, avg_time_diff, avg_time_diff_missed) {
    return (
      <div>
        <Row name="aggregated-report">
          <Col xs={3}>
            <Widget header={num_tasks} children="Storyboards" />
          </Col>
          <Col xs={3}>
            <Widget header={deadlines_missed} children="Deadlines missed" />
          </Col>
          <Col xs={3}>
            <Widget header={Math.round(avg_time_diff)} children="Time delta (total)"/>
          </Col>
          <Col xs={3}>
            <Widget header={Math.round(avg_time_diff_missed)} children="Time delta (missed deadlines)"/>
          </Col>
        </Row>
      </div>
    )
  };

  renderEmployeeReport(employeeReportData) {
    let rows = employeeReportData.map((report) => {
      let deadline_rate = (report.data.deadlines_missed/report.data.num_tasks)*100;
      return <tr key={report.employee.employee_code}>
        <td>{report.employee.name}</td>
        <td>{report.data.num_tasks}</td>
        <td>{report.data.deadlines_missed} ({Math.round(deadline_rate)}%)</td>
        <td>{Math.round(report.data.avg_time_diff)}</td>
        <td>{Math.round(report.data.avg_time_diff_missed)}</td>
      </tr>
    });

    return (
        <Card>
          <CardHeader>
          <i className="fa fa-users"></i> Employee Statistics
          </CardHeader>
          <CardBody>
            <Row name="per-employee-report">
              <Col xl="12">
                <Table hover striped responsive size="sm">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>No. of Storyboards</th>
                      <th>Deadlines Missed</th>
                      <th>Time Delta (Total)</th>
                      <th>Time Delta (Missed Deadlines)</th>
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
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(InternalReviewsReport);
