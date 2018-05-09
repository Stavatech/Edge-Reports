import { uploadConstants } from '../constants';

const initialState = () => ({
    loading: false,
    error: {}
  }
);

const uploads = (state = initialState(), action) => {
  switch (action.type) {
    case uploadConstants.UPLOAD_REQUEST:
      return {...state, loading: true}

    case uploadConstants.UPLOAD_SUCCESS:
      return {...state, loading: false}

    case uploadConstants.UPLOAD_FAILURE:
      return {...state, loading: false}

    default:
      return state
  }
}

export default uploads;
