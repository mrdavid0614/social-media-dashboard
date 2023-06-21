import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext({ isDarkMode: false, setIsDarkMode: () => {} });
const DARK_MODE_KEY = "dark_mode"

export function useThemeContext() {
    return useContext(ThemeContext);
}

export function ThemeContextProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem(DARK_MODE_KEY) === "true");

    useEffect(() => {
        if (localStorage.getItem(DARK_MODE_KEY))
            return;

        if (window.matchMedia)
            setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }, []);

    useEffect(() => {
        const htmlElement = document.querySelector('html');

        if (isDarkMode)
            htmlElement.classList.add('dark');
        else
            htmlElement.classList.remove('dark');

        localStorage.setItem(DARK_MODE_KEY, isDarkMode);
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}