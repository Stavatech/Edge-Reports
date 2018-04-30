import { reportConstants } from '../constants';

const initialState = () => ({
    reportId: undefined,
    reportLoading: false,
    reportData: undefined,
    errors: {}
  }
);

const reports = (state = initialState(), action) => {
  switch (action.type) {
    case reportConstants.SET_REPORT:
        return {...state, reportId: action.reportId};

    case reportConstants.GET_REQUEST:
      return {...state, reportLoading: true}

    case reportConstants.GET_SUCCESS:
      return {...state, reportData: action.payload, reportLoading: false}

    case projectConstants.SAVE_FAILURE:
      return {...state, reportLoading: false}

    default:
      return state
  }
}

export default reports;
