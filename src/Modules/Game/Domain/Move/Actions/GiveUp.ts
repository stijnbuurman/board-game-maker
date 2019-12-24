import {Action} from "../Action";
import {Game} from "../../Game/Game";
import {PlayerID} from "../../Player/PlayerID";

export class GiveUp implements Action {
    execute(game: Game, playerID: PlayerID) {
        const player = game.getPlayerByID(playerID);
        player.fold();
    }

    serialize(): { [p: string]: any } {
        return {
            name: 'give-up',
        };
    }

}