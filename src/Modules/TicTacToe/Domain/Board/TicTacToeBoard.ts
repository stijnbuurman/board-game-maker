import {Board} from "../../../Game/Domain/Board/Board";

export class TicTacToeBoard extends Board {
    static create(): Board {
        return Board.createSquare(3);
    }
}