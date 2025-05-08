import { useState } from "react";

const useLocalStorage = (key) => {
    const [storedValue, setStoredValue] = useState(() => {
        const reiksme = localStorage.getItem(key)
        return reiksme || null;
    })

    const setValue = (newValue) => {
        window.localStorage.setItem(key, JSON.stringify(newValue));
        setStoredValue(newValue);
    }

    return [storedValue, setValue]

}

export default useLocalStorage;