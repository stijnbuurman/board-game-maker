import {EndRule} from "../EndRule";
import {Game} from "../../Game/Game";

export class NoEmptyTilesLeft extends EndRule {
    hasEnded(game: Game): boolean {
        return game.getBoard().getTilesWithoutPieces().length === 0;
    }

}