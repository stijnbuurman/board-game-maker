import {Action} from "./Action";
import {Serializable} from "../../../../Common/Serializable";
import {PlayerID} from "../Player/PlayerID";
import {Game} from "../Game/Game";

export class Move implements Serializable {
    constructor(private playerID: PlayerID, private action: Action) {

    }

    getPlayerID() {
        return this.playerID;
    }

    getAction() {
        return this.action;
    }

    execute(game: Game) {
        this.getAction().execute(game, this.playerID);
    }

    serialize() {
        return {
            player_id: this.playerID.toString(),
            action: this.action.serialize(),
        }
    }
}