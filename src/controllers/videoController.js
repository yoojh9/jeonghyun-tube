import { videoList, getVideo } from '../models/videos'

export const home = async (req, res) => {
    try {
        const { keyword } = req.query;
        let videos = await videoList(keyword)
        res.render("home", { pageTitle: "Home", videos, keyword, index: 0 });
    } catch (error) {
        console.error(error);
        res.render("home", { pageTitle: "Home", videos: [], keyword, index: 0 })
    }
}

export const play = async (req, res) => {
    const { id } = req.params;
    console.log('id=' + id)
    const video = await getVideo(id)
    if (!video) {
        return res.render("404", { pageTitle: "Video not found." });
    }
    const youtubeIframe = video.items[0].player.embedHtml
    return res.status(200).json({ link: youtubeIframe });
}

export const watch = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('id=' + id)
        const video = await getVideo(id)
        if (!video) {
            return res.render("404", { pageTitle: "Video not found." });
        }
        const youtubeIframe = video.items[0].player.embedHtml
        return res.render("watch", { link: youtubeIframe, title: video.items[0].snippet.title });
    } catch (error) {
        console.error(error)
        res.render("watch", {})
    }
}