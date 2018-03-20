import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';

class ProjectList extends Component {
  render() {
    return <Card>
      <CardHeader>
        <i className="fa fa-align-justify"></i> Projects
      </CardHeader>
      <CardBody>
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
            <tr>
              <td>IIE2018S1</td>
              <td>IIE 2018 Semester 1</td>
              <td>5/5/2018</td>
              <td>In Progress</td>
            </tr>
            <tr>
              <td>BCC2018S1</td>
              <td>BCC 2018 Semester 1</td>
              <td>17/5/2018</td>
              <td>In Progress</td>
            </tr>
          </tbody>
        </Table>
        <nav style={{float: "right"}}>
          <Pagination>
            <PaginationItem><PaginationLink previous href="#">Prev</PaginationLink></PaginationItem>
            <PaginationItem active>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink next href="#">Next</PaginationLink></PaginationItem>
          </Pagination>
        </nav>
      </CardBody>
    </Card>
  }
}

class Projects extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <ProjectList/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Projects;
