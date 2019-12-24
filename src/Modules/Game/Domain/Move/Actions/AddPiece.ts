import {Piece} from "../../Piece/Piece";
import {Action} from "../Action";
import {Game} from "../../Game/Game";
import {PlayerID} from "../../Player/PlayerID";

export class AddPiece implements Action {
    constructor(private piece: Piece, private x: number, private y: number) {
    }

    execute(game: Game, playerID: PlayerID) {
        const player = game.getPlayerByID(playerID);
        player.removePiece(this.piece);
        game.getBoard().addPiece(this.piece, this.x, this.y);
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getPiece() {
        return this.piece;
    }

    serialize() {
        return {
            name: 'add-piece',
            x: this.x,
            y: this.y,
            piece: this.piece.serialize(),
        }
    }
}