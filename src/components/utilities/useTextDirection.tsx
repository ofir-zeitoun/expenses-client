import i18next from 'i18next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type TextDirection = "rtl" | "ltr";

export const useTextDirection = (): [(language: string) => void] => {
    
    const { i18n} = useTranslation();
    const savedDir = localStorage.getItem("currentDir") as TextDirection || 'ltr';
    const [currentDir, setCurrentDir] = useState<TextDirection>(savedDir);

    useEffect(() => {
        document.documentElement.setAttribute("data-text-dir", currentDir);
    }, [currentDir]);

    const changeDirWithLanguage = (language: string) => {
        const newDir : TextDirection = i18next.dir(language);
        i18n.changeLanguage(language)
        setCurrentDir(newDir);
        localStorage.setItem("currentDir", newDir);
    };

    return [changeDirWithLanguage];
};