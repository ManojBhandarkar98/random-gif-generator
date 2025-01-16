const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=2doF8g9OHTSYDcNRojNEyohyDYRcfkWI`;
const searchUrl = `https://api.giphy.com/v1/gifs/random?api_key=2doF8g9OHTSYDcNRojNEyohyDYRcfkWI&search=${search}`;
const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);


    async function fetchData() {
        setLoading(true)

        const { data } = await axios.get(tag ? searchUrl : randomUrl);
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
