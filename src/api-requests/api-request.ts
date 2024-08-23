import axios from "axios";
import { Image } from "../components/App/App.types";
axios.defaults.baseURL = "https://api.unsplash.com/";

interface UnsplashResponse {
    total: number,
    total_pages: number,
    results: Image[]
}


export const fetchImages = async (nameOnRequest: string, npage:number, nlimit:number): Promise<UnsplashResponse> => {
    const responce = await axios.get<UnsplashResponse>('search/photos/', {
        params: {
            client_id: "KJt-FM9JROgPKAbfC_GoPhwJkx8P9SUrh5LmAclfNRo",
            query: nameOnRequest,
            page: npage,
            per_page: nlimit,
            orientation: "landscape",
        }
    })
    return responce.data
}