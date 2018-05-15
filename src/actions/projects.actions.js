import { RSAA } from 'redux-api-middleware';

import { projectConstants } from '../constants';
import { withAuth } from '../reducers';

export const listProjects = () => ({
  [RSAA]: {
    endpoint: '/api/projects/',
    method: 'GET',
    headers: withAuth({'Content-Type': 'application/json'}),
    types: [
      projectConstants.LIST_REQUEST,
      projectConstants.LIST_SUCCESS,
      projectConstants.LIST_FAILURE
    ]
  }
});

export const getProject = (projectCode) => ({
  [RSAA]: {
    endpoint: '/api/projects/' + projectCode,
    method: 'GET',
    headers: withAuth({'Content-Type': 'application/json'}),
    types: [
      projectConstants.GET_REQUEST,
      projectConstants.GET_SUCCESS,
      projectConstants.GET_FAILURE
    ]
  }
});

export const saveProject = (projectCode, name, description, deadline) => ({
  [RSAA]: {
    endpoint: '/api/projects/',
    method: 'PUT',
    headers: withAuth({'Content-Type': 'application/json'}),
    body: JSON.stringify({
      project_code: projectCode,
      name,
      description,
      deadline
    }),
    types: [
      projectConstants.SAVE_REQUEST,
      projectConstants.SAVE_SUCCESS,
      projectConstants.SAVE_FAILURE
    ]
  }
});