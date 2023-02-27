import { useState, useEffect } from 'react';

function useDebouced(value, delay) {
    const [deboucedValue, setDeboucedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDeboucedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return deboucedValue;
}

export default useDebouced;
