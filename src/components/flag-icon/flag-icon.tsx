import './flag-icon.css'

type Props = {
    countryCode:string,
}
export function FlagIcon({countryCode}:Props) {
    return (
        <div className={'flag-icon ' + countryCode}></div>
    )
}

