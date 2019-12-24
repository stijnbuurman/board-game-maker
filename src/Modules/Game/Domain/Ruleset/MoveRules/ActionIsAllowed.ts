import {Move} from "../../Move/Move";
import {Game} from "../../Game/Game";
import {MoveRule} from "../MoveRule";
import {Action} from "../../Move/Action";

interface ActionClass {
    new (...params: any[]): Action;
}

export class ActionIsAllowedRule extends MoveRule {
    constructor(protected allowedActions: ActionClass[]) {
        super();
    }

    isValid(game: Game, move: Move) {
        return this.allowedActions.find((allowedAction) => {
            return move.getAction() instanceof allowedAction;
        });
    };

    errorMessage() {
        return 'Game has already finished';
    }
}