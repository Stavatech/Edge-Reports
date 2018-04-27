import { projectConstants } from '../constants';

const initialState = {projects: [], projectsLoaded: false};

const projects = (state = initialState, action) => {
  switch (action.type) {
    case projectConstants.SAVE_REQUEST:
      return {
        ...state,
        loading: true
      }

    case projectConstants.SAVE_SUCCESS:
      let project = state.projects.find((item) => {
        return item.projectId === action.projectId;
      });

      if (project === undefined) {
        state.projects.push({
          projectId: action.projectId,
          projectName: action.projectName,
          deadline: action.deadline,
          status: "n/a"
        });
      } else {
        project.projectId = action.projectId;
        project.projectName = action.projectName;
        project.deadline = action.deadline;
      }

      return {
        ...state,
        loading: false
      }

    case projectConstants.SAVE_FAILURE:
      return {
        ...state,
        loading: false
      }

    case projectConstants.LIST_SUCCESS:
      return {...state, projects: action.projects, projectsLoaded: true}
    default:
      return state
  }
}

export default projects;
