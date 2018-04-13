const getUsers = () => {
    return [
      {projectId: "IIE2018S1", projectName: "IIE 2018 Semester 1", deadline: "5/5/2018", status: "In Progress"},
      {projectId: "BCC2018S1", projectName: "BCC 2018 Semester 1", deadline: "17/5/2018", status: "In Progress"}
    ];
  }

  const initialState = {users: [], usersLoaded: false};

  const users = (state=initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':
        state.projects.push({
          projectId: action.projectId,
          projectName: action.projectName,
          deadline: action.deadline,
          status: "n/a"
        });
        return {...state}
      case 'LIST_USERS':
        return {...state, projects: getUsers()}
      default:
        return state
    }
  }

  export default users;
