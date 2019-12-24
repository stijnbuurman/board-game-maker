import * as express from 'express';
import {gameController} from "../Controllers";

const gameRouter = express.Router();


gameRouter.get('/',
    (req, res) => gameController.list(req, res)
);

export {
    gameRouter
}