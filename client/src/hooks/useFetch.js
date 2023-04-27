import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetch(id) {
    const [info, setInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    async function FetchPokemon(id) {
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setInfo(data);
        } catch (err) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        FetchPokemon(id);
    }, [id]);

    return { info, isLoading, error };
}
