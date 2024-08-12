import { useEffect, useState } from 'react';

type TextDirection = "rtl" | "ltr";

export const useTextDirection = (): [TextDirection, (newDir: TextDirection) => void] => {
    //get default dir from system browser
    // how to handle css 
    const savedDir = localStorage.getItem("currentDir") as TextDirection || 'ltr';
    const [currentDir, setCurrentDir] = useState<TextDirection>(savedDir);

    useEffect(() => {
        document.documentElement.setAttribute("data-text-dir", currentDir);
    }, [currentDir]);

    const handleSetDir = (newDir: TextDirection) => {
        setCurrentDir(newDir);
        localStorage.setItem("currentDir", newDir);
    };

    return [currentDir, handleSetDir];
};