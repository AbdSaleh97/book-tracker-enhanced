import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export default function AuthWrapper({ children }) {
    const [globalLoginState, setGlobalLoginState] = useState({
        token: null,
        username: null,  
        login: null
    });

    async function login(userInfo) {
        const url = "http://localhost:8000/api/token/";
        const res = await axios.post(url, userInfo);  // Removed the extra '='
        setGlobalLoginState((prev) => ({
            ...prev,
            token: res.data,  
            username: userInfo.username,
        }));
    }

    return (
        <AuthContext.Provider value={{ ...globalLoginState, login, setGlobalLoginState }}>
            {children}
        </AuthContext.Provider>
    );
}
