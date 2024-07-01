export const isAuthenticated = () => {
    //cek token
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }

    //cek struktur token
    const parts = token.split('.');
    if (parts.length !== 3) {
        return false;
    }

    //cek masa expired token
    const payload = JSON.parse(atob(parts[1]));
    const currentTime = Math.floor(Date.now() / 1000);
    if (payload.exp < currentTime) {
        return false;
    }

    return true;
};

export const getRole = () => {
    const token = localStorage.getItem('token');
    if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.role;
    }
    return null;
};
