import {GameController} from "./GameController";
import {gameRepository} from "../../../Modules/Game";
import {TicTacToeController} from "./TicTacToeController";

const gameController = new GameController(gameRepository);
const ticTacToeController = new TicTacToeController(gameRepository);

export {
    gameController,
    ticTacToeController
}