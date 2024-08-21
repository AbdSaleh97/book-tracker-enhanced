import { createContext, useEffect, useState } from "react";

// 1. create the context
export const ThemeContext = createContext();

// 2. create the context wrapper
export default function ThemeWrapper({ children }) {
    const [isDarktheme, setIsDarkTheme] = useState(true);

    function initialThemeHandler() {
        const storedTheme = localStorage.getItem("isDarkTheme");

        if (!storedTheme) {
            localStorage.setItem("isDarkTheme", 'true');
            document.querySelector("body").classList.add("dark");
            setIsDarkTheme(true);
        } else {
            const isDarkTheme = JSON.parse(storedTheme);
            if (isDarkTheme) {
                document.querySelector("body").classList.add("dark");
            } else {
                document.querySelector("body").classList.remove("dark");
            }
            setIsDarkTheme(isDarkTheme);
        }
    }

    function toggleThemeHandler() {
        const isDarkTheme = !isDarktheme; // Toggle the current theme
        setIsDarkTheme(isDarkTheme);
        document.querySelector("body").classList.toggle("dark", isDarkTheme); // Apply or remove dark class
        localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
    }

    const globalState = {
        isDarktheme, // Use the state here instead of hardcoded true
        toggleThemeHandler,
    };

    useEffect(() => {
        initialThemeHandler();
    }, []);

    return (
        <ThemeContext.Provider value={globalState}>
            {children}
        </ThemeContext.Provider>
    );
}
