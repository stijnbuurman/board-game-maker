import * as express from 'express';
import {ticTacToeController} from "../Controllers";

const ticTacToeRouter = express.Router();


ticTacToeRouter.post('/',
    (req, res) => ticTacToeController.create(req, res)
);

ticTacToeRouter.post('/:gameID/move',
    (req, res) => ticTacToeController.move(req, res)
);

export {
    ticTacToeRouter
}