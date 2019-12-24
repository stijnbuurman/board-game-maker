import {WinRule} from "../WinRule";
import {Game} from "../../Game/Game";
import {PlayerID} from "../../Player/PlayerID";
import {PlayerStateEnum} from "../../Player/PlayerStateEnum";

export class AllOtherPlayersGaveUp extends WinRule {
    getWinner(game: Game): PlayerID {
        const notFoldedPlayers = game.getPlayers().filter((player) => {
            return player.getState() !== PlayerStateEnum.FOLDED;
        });

        if (notFoldedPlayers.length === 1) {
            return notFoldedPlayers[0].getID();
        }

        return undefined;
    }

}