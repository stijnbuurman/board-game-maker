import {MoveRule} from "../../../../Game/Domain/Ruleset/MoveRule";
import {Game} from "../../../../Game/Domain/Game/Game";
import {Move} from "../../../../Game/Domain/Move/Move";
import {TicTacToePlayer} from "../../Player/TicTacToePlayer";


export class PlayerIsOnTurnRule extends MoveRule {
    isValid(game: Game, move: Move) {
        let turnOf = game.getBoard().getTilesWithPieces().length % 2 ? 'O' : 'X';
        const player = game.getPlayerByID(move.getPlayerID());

        return (player as TicTacToePlayer).getName() === turnOf;
    }

    errorMessage() {
        return 'Player is not on turn';
    }
}