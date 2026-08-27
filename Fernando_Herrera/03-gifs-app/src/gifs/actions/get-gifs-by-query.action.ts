
import type { GiphyResponse } from "../interface/giphy.response";
import type { Gif } from "../interface/gif.interface";
import { giphyApi } from "../api/giphy.api";

export const getGifsByQuery = async(query: string): Promise<Gif[]> => {
    // URL completa https://api.giphy.com/v1/gifs/search?api_key=8s0uLFQN6TDCtBFx5VOInDP7eoDY6OaB&q=Saitama&limit=25&lang=es
    
    const response = await giphyApi<GiphyResponse>('/search', { //solo la base del URL
        params :{
            q:query,
            limit:10,
            // lang:'es',
            // // api_key:'8s0uLFQN6TDCtBFx5VOInDP7eoDY6OaB'
            // api_key: import.meta.env.VITE_GIPHY_API_KEY
        }
    }
    );

    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height)
    }
    ))
    console.log(response.data);
}