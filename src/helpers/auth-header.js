export const authHeader = () => {
    let tokens = JSON.parse(localStorage.getItem('tokens'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + tokens.access };
    } else {
        return {};
    }
}