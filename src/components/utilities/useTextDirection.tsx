import i18next from 'i18next';
import { useEffect, useState } from 'react';

type TextDirection = "rtl" | "ltr";

export const useTextDirection = (): [TextDirection, (newDir: TextDirection) => void , (language: string) => void] => {
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

    const changeDirWithLanguage = (language: string) => {
        const newDir : TextDirection = i18next.dir(language);
        setCurrentDir(newDir);
        localStorage.setItem("currentDir", newDir);
    };

    return [currentDir, handleSetDir,changeDirWithLanguage];
};