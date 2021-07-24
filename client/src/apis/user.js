import api from '../services/axios'

export async function profile() {
    return await api.get('/api/v1/user/profile')
}
export async function signin(email,password) {
    return await api.post('/api/v1/signin', { email, password })
}
export async function signup(fullName,email,password) {
    return await api.post('/api/v1/signup', { fullName, email, password })
}
export async function verifyEmail(emailVerificationCode) {
    return await api.post('/api/v1/verify-email', { emailVerificationCode })
}
export async function getUsers() {
    return await api.post('/api/v1/users')
}
export async function getUser() {
    return await api.post('/api/v1/user/:id')
}
export async function resetPassEmail() {
    return await api.post('/api/v1/pass-reset-email')
}
export async function resetPassLink(token) {
    return await api.post(`/api/v1/reset-pass-link/${token}`)
}
export function signout() {
    return api.post('/api/v1/signout')
}