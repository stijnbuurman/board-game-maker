import {Move} from "../../Move/Move";
import {Game} from "../../Game/Game";
import {StateEnum} from "../../State/StateEnum";
import {InvalidMoveError} from "../../Error/InvalidMoveError";
import {MoveRule} from "../MoveRule";

export class GameIsInProgress extends MoveRule {
    isValid(game: Game, move: Move) {
        return game.getState().getState() === StateEnum.IN_PROGRESS;
    };

    errorMessage() {
        return 'Game is not in progress';
    }
}