import { useCallback, useEffect } from "react"

export const useDebounce = <T>(value: T, callback: (newValue: T) => void, timeout = 300): void => {
    const cb = useCallback(callback, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            cb(value);
        }, timeout);
        return () => {
            clearTimeout(timer);
        }
    }, [value, cb, timeout])
}