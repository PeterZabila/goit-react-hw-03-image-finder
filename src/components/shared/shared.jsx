import axios from "axios";
const URL = "https://pixabay.com/api"
const LIMIT = 12;

const instance = axios.create({
    baseURL: URL,
    params: {
        per_page: LIMIT,
    }
});

export const getPosts = async(page = 1) => {
    const { data } = await instance.get("/", {
        params: {
            page,
        }
    });
    return data;
}

export const searchPosts = async(q, page = 1) => {
    const {data} = await instance.get("/", {
        params: {
            q,
            page,
            key: "28076639-0feb76057bbd5c0e620bbf417",
        }
    });
    return data;
}
