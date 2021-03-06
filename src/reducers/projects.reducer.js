import { projectConstants } from '../constants';

const initialState = () => ({
    projects: [],
    projectsLoading: false,
    projectSaving: false,
    selectedProject: undefined,
    projectLoading: false,
    errors: {}
  }
);

const projects = (state = initialState(), action) => {
  switch (action.type) {
    case projectConstants.SAVE_REQUEST:
      return {...state, projectSaving: true}

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

      return {...state, projectSaving: false}

    case projectConstants.SAVE_FAILURE:
      return {...state, projectSaving: false}

    case projectConstants.LIST_REQUEST:
      return {...state, projectsLoading: true}

    case projectConstants.LIST_SUCCESS:
      return {...state, projects: action.payload, projectsLoading: false}

    case projectConstants.LIST_FAILURE:
      return {...state, projectsLoading: false, projectsLoaded: true}

    case projectConstants.GET_REQUEST:
      return {...state, selectedProject: undefined, projectLoading: true}

    case projectConstants.GET_SUCCESS:
      return {...state, selectedProject: action.payload, projectLoading: false}

    case projectConstants.GET_FAILURE:
      return {...state, selectedProject: undefined, projectLoading: false}

    default:
      return state
  }
}

export default projects;
