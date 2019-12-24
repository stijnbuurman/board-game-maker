import {Piece} from "../../../Game/Domain/Piece/Piece";
import {PlayerID} from "../../../Game/Domain/Player/PlayerID";

export class XPiece extends Piece {
    constructor(playerID: PlayerID) {
        super('X', playerID);
    }
}