import express from "express"
import {
    play,
    watch
} from '../controllers/videoController'

const videoRouter = express.Router();

//videoRouter.get("/:id", watch);

videoRouter.get("/:id", play);

export default videoRouter;