import {Player} from "../../../Game/Domain/Player/Player";
import {PlayerID} from "../../../Game/Domain/Player/PlayerID";
import {XPiece} from "../Piece/XPiece";
import {OPiece} from "../Piece/OPiece";

export class TicTacToePlayer extends Player {
    static createX(id: PlayerID) {
        return new TicTacToePlayer(id, 'X', [
            new XPiece(id),
            new XPiece(id),
            new XPiece(id),
            new XPiece(id),
            new XPiece(id),
        ]);
    }

    static createO(id: PlayerID) {
        return new TicTacToePlayer(id, 'O', [
            new OPiece(id),
            new OPiece(id),
            new OPiece(id),
            new OPiece(id),
            new OPiece(id),
        ]);
    }
}