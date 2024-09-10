
interface SupportedLanguage{
    key: string,
    countryCode: string,
    label: string,
}
export const LanguageOption : SupportedLanguage[] = [
    {
        key: "en",
        countryCode: "US",
        label: "English",
    },
    {
        key: "he",
        countryCode: "IL",
        label: "עברית",
    },
]