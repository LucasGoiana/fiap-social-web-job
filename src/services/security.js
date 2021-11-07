import { api } from "./api";


const USER_KEY = "@user";

export const signIn = (user) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));

    api.defaults.headers.common["authorization"] = `Bearer ${user.token}`;
}

export const getUser = () => {
    const { student } = JSON.parse(localStorage.getItem(USER_KEY));

    return student;
}