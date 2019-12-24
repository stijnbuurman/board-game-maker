import {SetupRule} from "./SetupRule";
import {MoveRule} from "./MoveRule";
import {Game} from "../Game/Game";
import {Move} from "../Move/Move";
import {InvalidMoveError} from "../Error/InvalidMoveError";
import {InvalidSetupError} from "../Error/InvalidSetupError";
import {EndRule} from "./EndRule";
import {WinRule} from "./WinRule";
import {GameState} from "../State/GameState";
import {StateEnum} from "../State/StateEnum";
import {PlayerID} from "../Player/PlayerID";

export class Ruleset {
    constructor(
        private setupRules: SetupRule[],
        private moveRules: MoveRule[],
        private endRules: EndRule[],
        private winRules: WinRule[],
        ) {
    }

    public validateSetup(game: Game) {
        const firstInvalidRule = this.setupRules.find((setupRule) => {
            return !setupRule.isValid(game);
        });

        if (!firstInvalidRule) {
            return;
        }

        throw new InvalidSetupError(firstInvalidRule.errorMessage(game));
    }

    /**
     * @throws InvalidMoveError
     */
    public validateMove(game: Game, move: Move): void {
        const firstInvalidRule = this.moveRules.find((moveRule: MoveRule) => {
            return !moveRule.isValid(game, move);
        });

        if (!firstInvalidRule) {
            return;
        }

        throw new InvalidMoveError(firstInvalidRule.errorMessage(game, move), move);
    }

    protected hasEnded(game: Game) {
        return !!this.endRules.reduce((isEnded, endRule) => {
            return isEnded || endRule.hasEnded(game);
        }, false);
    }

    protected getWinner(game: Game): PlayerID|undefined {
        return this.winRules.reduce<PlayerID|undefined>((winner, winRule) => {
            return winner ? winner : winRule.getWinner(game);
        }, undefined)
    }

    getResult(game: Game) {
        const winner = this.getWinner(game);
        const hasEnded = this.hasEnded(game);

        switch (true) {
            case !!winner:
                return new GameState(StateEnum.WINNER, winner);
            case !winner && hasEnded:
                return new GameState(StateEnum.DRAW);
            case !winner && !hasEnded:
            default:
                return new GameState(StateEnum.IN_PROGRESS);
        }
    }
}