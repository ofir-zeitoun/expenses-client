import { useCallback, useEffect} from 'react';
import { useTranslation } from 'react-i18next';


export const useTextDirection = (): (language: string) => void => {
    
    const { i18n} = useTranslation();

    useEffect(() => {
        document.dir = i18n.dir()
    }, [i18n.language]);

    const changeDirWithLanguage = useCallback((language: string) => {
        i18n.changeLanguage(language);
        document.dir = i18n.dir()
    }, [i18n]);

    return changeDirWithLanguage;
};