import { useCallback} from 'react';
import { useTranslation } from 'react-i18next';


export const useTextDirection = (): (language: string) => void => {
    
    const { i18n} = useTranslation();

    const changeDirWithLanguage = useCallback((language: string) => {
        i18n.changeLanguage(language);
    }, [i18n]);

    return changeDirWithLanguage;
};