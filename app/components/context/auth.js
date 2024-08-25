import { createContext, useState } from "react";
import axios from "axios";

// 1. create the context
export const AuthContext = createContext();

export default function AuthWrapper({ children }) {
    const [globalLoginState, setGlobalLoginState] = useState({
        token: null,
        username: null,  
        login: null,  
    });

    async function login(userInfo) {
        const url = "http://localhost:8000/api/token/";
        const res = await axios.post(url, userInfo);
        setGlobalLoginState((prev) => ({
            ...prev,
            token: res.data,  // Store the token
            username: userInfo.username,  // Store the username
        }));
    }

    return (
        <AuthContext.Provider value={{ ...globalLoginState, login, setGlobalLoginState }}>
            {children}
        </AuthContext.Provider>
    );
}
