import { Platform } from "react-native";
export const BASE_URL = Platform.OS === "android" ?
    "http://localhost:3001" :
    "http://10.0.2.2:3000"
    
export const SOCKET_URL = Platform.OS === "android" ?
    "ws://localhost:3001" :
    "ws://10.0.2.2:3001"