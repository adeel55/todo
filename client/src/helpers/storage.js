import jwtDecode from 'jwt-decode';

const tokenName = "auth_token"
export function setToken(token) {
    if (token) {
        localStorage.setItem(tokenName,token);
    } else {
        localStorage.removeItem(tokenName);
    }
}
export function getToken() {
    return localStorage.getItem(tokenName)
}
export function tokenValid(token) {
    return getToken() && verifyToken(getToken())
}

const verifyToken = (token) => {
    const decoded = jwtDecode(token);
    return decoded.exp > (Date.now() / 1000);
}