import { RSAA } from 'redux-api-middleware';

import { reportConstants } from '../constants';
import { authHeader } from '../helpers';

export const generateReport = (reportId, filters) => {
  filters = JSON.stringify(filters);

  return {
    [RSAA]: {
      endpoint: "/api/reports/" + reportId + "?filters=" + filters,
      method: 'GET',
      headers: { ...authHeader(), 'Content-Type': 'application/json' },
      types: [
        reportConstants.GET_REQUEST, reportConstants.GET_SUCCESS, reportConstants.GET_FAILURE
      ]
    }
  }
};

export const clearReportData = () => ({
  type: reportConstants.CLEAR_REPORT_DATA
});

export const setReportId = (reportId) => ({
  type: reportConstants.SET_REPORT,
  reportId
});