import axios from "axios"
import { useQuery } from "react-query";

const fetchImageData = async (id) => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/photos")
    const [result] = data.filter((item) => item.id === id)
    return result;
}

const useGetImageDetail = (id) => useQuery(['getImages',id],() => fetchImageData(id))
export default useGetImageDetail;