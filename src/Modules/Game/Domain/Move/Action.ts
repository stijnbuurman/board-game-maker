import {Serializable} from "../../../../Common/Serializable";
import {Game} from "../Game/Game";
import {PlayerID} from "../Player/PlayerID";

export interface Action extends Serializable {
    execute(game: Game, playerID: PlayerID);
}