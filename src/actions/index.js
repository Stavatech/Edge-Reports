export const saveProject = (projectId, projectName, deadline) => {
    window.location = '/#/projects';
    return {
        type: 'SAVE_PROJECT',
        projectId,
        projectName,
        deadline
    }
};

const getProjects = () => {
    return [
        {projectId: "IIE2018S1", projectName: "IIE 2018 Semester 1", deadline: "5/5/2018", status: "In Progress"},
        {projectId: "BCC2018S1", projectName: "BCC 2018 Semester 1", deadline: "17/5/2018", status: "In Progress"}
    ];
}

export const listProjects = () => ({
    type: 'LIST_PROJECTS',
    projects: getProjects()
});
