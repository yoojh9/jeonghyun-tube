import axios from 'axios'
import dotenv from "dotenv/config"

const options = {
    baseURL: 'https://www.googleapis.com/youtube/v3',
    method: 'GET',
    params: {}
}

const API_KEY = process.env.YOUTUBE_API_KEY

export const videoList = async (keyword) => {
    console.log('API_KEY : ' + API_KEY)
    try {
        options.url = "/search"
        options.params = {
            key: API_KEY,
            part: 'snippet',
            maxResults: 20,
            order: 'viewCount',
            type: 'video',
            safeSearch: "moderate",
            videoEmbeddable: true,
            videoSyndicated: true,
            regionCode: "KR",
            q: keyword,
            videoDuration: "short",
        }
        let res = await axios(options)
        console.log(JSON.stringify(res.data))
        return res.data.items
    } catch (error) {
        console.error(error)
        throw new Error(error.message)
    }
}


export const getVideo = async (id) => {

    try {
        options.url = "/videos"
        options.params = {
            key: API_KEY,
            id: id,
            part: 'player,snippet',
        }

        let res = await axios(options)
        console.log(JSON.stringify(res.data))
        return res.data
    } catch (error) {
        throw new Error(error.message)
    }
}

