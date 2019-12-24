import {Move} from "../Move/Move";
import {Game} from "../Game/Game";

export abstract class MoveRule {
    abstract isValid(game: Game, move: Move);

    abstract errorMessage(game: Game, move: Move);
}