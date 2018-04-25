import { authHeader } from '../helpers';

const login = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch('/api/accounts/auth/token/obtain/', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(tokens => {
            if (tokens && tokens.access) {
                localStorage.setItem('tokens', JSON.stringify(tokens));
            }

            return tokens;
        });
};

const refreshAccessToken = (token) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
    };

    return fetch('/api/accounts/auth/token/refresh/', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(tokens => {
            if (tokens && tokens.access) {
                localStorage.setItem('tokens', JSON.stringify(tokens));
            }

            return tokens;
        });
};

const logout = () => {
    localStorage.removeItem('tokens');
};

export const authService = {
    login,
    refreshAccessToken,
    logout
};
