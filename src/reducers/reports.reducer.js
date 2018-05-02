import { reportConstants } from '../constants';

const initialState = () => ({
    reportLoading: false,
    reportData: undefined,
    errors: {}
  }
);

const reports = (state = initialState(), action) => {
  switch (action.type) {
    case reportConstants.GET_REQUEST:
      return {...state, reportData: undefined, reportLoading: true}

    case reportConstants.GET_SUCCESS:
      return {...state, reportData: action.payload, reportLoading: false}

    case reportConstants.GET_FAILURE:
      return {...state, reportData: undefined, reportLoading: false}

    case reportConstants.CLEAR_REPORT_DATA:
      return initialState();

    default:
      return state
  }
}

export default reports;
