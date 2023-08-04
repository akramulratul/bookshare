import io from "socket.io-client";
const ENDPOINT = "https://bookshare-alpha.vercel.app/";

export const socket = io(ENDPOINT, { autoConnect: false });
