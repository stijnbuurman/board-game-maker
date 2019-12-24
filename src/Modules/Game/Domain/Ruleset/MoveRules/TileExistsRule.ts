import {Move} from "../../Move/Move";
import {Game} from "../../Game/Game";
import {StateEnum} from "../../State/StateEnum";
import {InvalidMoveError} from "../../Error/InvalidMoveError";
import {MoveRule} from "../MoveRule";
import {AddPiece} from "../../Move/Actions/AddPiece";

export class TileExistsRule extends MoveRule {
    isValid(game: Game, move: Move) {
        if (move.getAction() instanceof AddPiece) {
            return game.getBoard().get(
                (move.getAction() as AddPiece).getX(),
                (move.getAction() as AddPiece).getY()
            ) !== undefined;
        }

        return true
    };

    errorMessage() {
        return 'Position does not exist';
    }
}