import axios from "axios";

export const fetchNews = async () => {
    try
    {
        let response = await axios.get(`http://localhost:5228/api/news/`);
        return response.data;

    }
    catch(e)
    {
        console.log(e);
    }
}