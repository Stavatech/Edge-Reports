

const initialState = {projects: [], projectsLoaded: false};

const projects = (state=initialState, action) => {
  switch (action.type) {
    case 'SAVE_PROJECT':
      let project = state.projects.find((item) => {
        return item.projectId === action.projectId;
      });

      if (project === undefined) {
        // create project
        state.projects.push({
          projectId: action.projectId,
          projectName: action.projectName,
          deadline: action.deadline,
          status: "n/a"
        });
      } else {
        // update project
        project.projectId = action.projectId;
        project.projectName = action.projectName;
        project.deadline = action.deadline;
      }

      return {...state}
    case 'LIST_PROJECTS':
      return {...state, projects: action.projects, projectsLoaded: true}
    default:
      return state
  }
}

export default projects;
