import {SetupRule} from "../SetupRule";
import {Game} from "../../Game/Game";

export class AllowedNumberOfPlayers extends SetupRule {
    constructor(private min: number, private max: number) {
        super();
    }

    isValid(game: Game): boolean {
        const playerCount = game.getPlayers().length;
        return playerCount >= this.min && playerCount <= this.max;
    }

    errorMessage(game: Game) {
        return 'Incorrect number of players';
    }
}