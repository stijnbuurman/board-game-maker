import {Game} from "../../Game/Domain/Game/Game";
import {TicTacToeBoard} from "./Board/TicTacToeBoard";
import {TicTacToePlayer} from "./Player/TicTacToePlayer";
import {TicTacToeRuleset} from "./Ruleset/TicTacToeRuleset";
import {GameID} from "../../Game/Domain/Game/GameID";
const uuid = require('uuid/v4');

export class TicTacToe extends Game {
    constructor(id: GameID, board: TicTacToeBoard, players: TicTacToePlayer[]) {
        super(
            new TicTacToeRuleset(),
            id,
            board,
            players
        );
    }

    static create(players: TicTacToePlayer[]) {
        return new TicTacToe(new GameID(uuid()), TicTacToeBoard.create(), players);
    }
}