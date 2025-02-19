import { io } from "socket.io-client";

const URL = "http://localhost:5000";
const Backend_URL = process.env.REACT_APP_BackEnd;

export const socket = io(Backend_URL);
export const navbarBrand = "YourVideoShare";
