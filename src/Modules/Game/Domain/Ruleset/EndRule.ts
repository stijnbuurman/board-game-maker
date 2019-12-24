import {Game} from "../Game/Game";

export abstract class EndRule {
    abstract hasEnded(game: Game): boolean;
}