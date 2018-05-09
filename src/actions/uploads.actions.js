import { RSAA } from 'redux-api-middleware';

import { uploadConstants } from '../constants';
import { withAuth } from '../reducers';

export const uploadSpreadsheet = (projectCode, spreadsheet) => {
  let formData = new FormData();
  formData.append('file', spreadsheet);

  return {
    [RSAA]: {
      endpoint: "/api/uploads/iie/courses/" + projectCode,
      method: 'POST',
      body: formData,
      headers: withAuth(),
      types: [
        uploadConstants.UPLOAD_REQUEST, uploadConstants.UPLOAD_SUCCESS, uploadConstants.UPLOAD_FAILURE
      ]
    }
  }
};