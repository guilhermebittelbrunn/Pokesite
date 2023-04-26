import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(id) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            const apiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const apiData = await apiResponse.data;
            setData(apiData);
            console.log(apiData);
            setIsLoading(false);
            console.log(data, isLoading, error);
            return { data, isLoading, error };
        })();
    }, [id]);
}
