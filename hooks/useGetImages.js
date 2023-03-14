import axios from "axios"
import { useQuery } from "react-query";

const fetchImageData = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/photos")
    return data.slice(0,50);
}

const useGetImages = () => useQuery('getImages', fetchImageData)
export default useGetImages;