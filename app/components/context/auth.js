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
        const url = process.env.NEXT_PUBLIC_API_URL+"api/token/";
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
