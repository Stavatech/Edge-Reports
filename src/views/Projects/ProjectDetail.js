import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  Table,
  Button
} from 'reactstrap';
import ButtonWrapper from '../../components/ButtonWrapper';

import { listProjects } from '../../actions';

class ProjectDetail extends Component {
  render() {
    return <div className="animated fadeIn">
      Project Detail:
    </div>
  }
}

export default ProjectDetail;
