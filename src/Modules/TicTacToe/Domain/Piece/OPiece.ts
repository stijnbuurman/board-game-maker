import {Piece} from "../../../Game/Domain/Piece/Piece";
import {PlayerID} from "../../../Game/Domain/Player/PlayerID";

export class OPiece extends Piece {
    constructor(playerID: PlayerID) {
        super('O', playerID);
    }
}