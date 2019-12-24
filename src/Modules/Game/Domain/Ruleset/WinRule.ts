import {Game} from "../Game/Game";
import {PlayerID} from "../Player/PlayerID";

export abstract class WinRule {
    abstract getWinner(game: Game): PlayerID;
}