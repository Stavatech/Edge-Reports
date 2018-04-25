import { combineReducers } from 'redux'
import projects from './projects.reducer'
import auth from './auth.reducer'

export default combineReducers({
  projects,
  auth
});
