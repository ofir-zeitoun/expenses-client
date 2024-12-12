import { useCallback, useEffect, useState } from 'react';

type ThemeMode = "dark" | "light";

export const useTheme = () => {
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem("currentTheme") as ThemeMode || (isSystemDark ? "dark" : "light");
    const [currentTheme, setCurrentTheme] = useState<ThemeMode>(savedTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", currentTheme);
    }, [currentTheme]);

    const handleSetTheme = useCallback(
        (newTheme: ThemeMode) => {
            setCurrentTheme(newTheme);
            localStorage.setItem("currentTheme", newTheme);
        }, []);

    const toggleTheme = useCallback(() => {
        handleSetTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }, []);
    
    return { currentTheme, handleSetTheme, toggleTheme };
};