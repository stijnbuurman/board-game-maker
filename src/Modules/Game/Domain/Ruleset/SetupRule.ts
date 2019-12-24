import {Game} from "../Game/Game";

export abstract class SetupRule {
    abstract isValid(game: Game): boolean;

    abstract errorMessage(game: Game);
}