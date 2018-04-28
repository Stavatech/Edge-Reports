export const authHeader = () => {
    let tokens = JSON.parse(localStorage.getItem('tokens'));

    if (tokens && tokens.access) {
        return { 'Authorization': 'Bearer ' + tokens.access.token };
    } else {
        return {};
    }
}