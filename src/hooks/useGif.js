import axios from "axios";
import { useEffect, useState } from "react";


const url = `https://api.giphy.com/v1/gifs/random?api_key=2doF8g9OHTSYDcNRojNEyohyDYRcfkWI`;
const useGif = (search) => {
    
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');


    async function fetchData(search) {
        setLoading(true)

        const { data } = await axios.get(search ? `${url}&search=${search}`: url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }
        , [])

    return { gif, loading, fetchData }
};

export default useGif;
