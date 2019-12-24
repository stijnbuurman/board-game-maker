import {Move} from "../../Move/Move";
import {Game} from "../../Game/Game";
import {MoveRule} from "../MoveRule";
import {AddPiece} from "../../Move/Actions/AddPiece";

export class TileDoesNotHavePieces extends MoveRule {
    isValid(game: Game, move: Move) {
        if (move.getAction() instanceof AddPiece) {
            const targetTile = game.getBoard().get(
                (move.getAction() as AddPiece).getX(),
                (move.getAction() as AddPiece).getY()
            );
            return !targetTile.hasPieces();
        }

        return true;
    }

    errorMessage() {
        return 'Position is already taken';
    }
}