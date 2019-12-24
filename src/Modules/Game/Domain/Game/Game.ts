import {Board} from "../Board/Board";
import {Player} from "../Player/Player";
import {Move} from "../Move/Move";
import {InvalidMoveError} from "../Error/InvalidMoveError";
import {GameState} from "../State/GameState";
import {Serializable} from "../../../../Common/Serializable";
import {PlayerID} from "../Player/PlayerID";
import {Ruleset} from "../Ruleset/Ruleset";
import {StateEnum} from "../State/StateEnum";
import {GameID} from "./GameID";

export abstract class Game implements Serializable {
    protected constructor(
        protected ruleset: Ruleset,
        protected id: GameID,
        protected board: Board,
        protected players: Player[] = [],
        protected gameState: GameState = new GameState(StateEnum.SETUP)
    ) {

    }

    /**
     * @throws InvalidSetupError
     */
    public start() {
        this.ruleset.validateSetup(this);
        this.gameState = new GameState(StateEnum.IN_PROGRESS);
    }

    /**
     * @throws InvalidMoveError
     */
    public makeMove(move: Move) {
        this.ruleset.validateMove(this, move);

        move.execute(this);

        this.gameState = this.ruleset.getResult(this);

        return this;
    }

    public getPlayerByID(playerID: PlayerID) {
        return this.players.find((player) => {
            return player.getID().is(playerID);
        })
    }

    getID() {
        return this.id;
    }

    getState() {
        return this.gameState;
    }

    getBoard() {
        return this.board;
    }

    getPlayers() {
        return this.players;
    }

    serialize() {
        return {
            id: this.id,
            state: this.gameState.serialize(),
            players: this.players.map((player) => player.serialize()),
            board: this.board.serialize(),
        }
    }
}