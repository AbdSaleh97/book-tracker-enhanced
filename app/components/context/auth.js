import { createContext, useState } from "react";
import axios from "axios";

// 1. create the context
export const AuthContext = createContext();

export default function AuthWrapper({ children }) {
    const [globalLoginState, setGlobalLoginState] = useState({
        token: null,
        username: null,  
        login: null,  
        userId : null
    });

    async function login(userInfo) {
        const url = "http://localhost:8000/api/token/";
        const res = await axios.post(url, userInfo);
        // console.log(res);
        // const { id } = res.data;
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
