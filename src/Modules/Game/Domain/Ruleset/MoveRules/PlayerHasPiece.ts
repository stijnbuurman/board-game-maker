import {Move} from "../../Move/Move";
import {Game} from "../../Game/Game";
import {MoveRule} from "../MoveRule";
import {AddPiece} from "../../Move/Actions/AddPiece";

export class PlayerHasPiece extends MoveRule {
    isValid(game: Game, move: Move) {
        if (move.getAction() instanceof AddPiece) {
            const player = game.getPlayerByID(move.getPlayerID());

            return player.hasPiece((move.getAction() as AddPiece).getPiece());
        }

        return true;
    }

    errorMessage() {
        return 'Position does not have piece';
    }
}