import {Piece} from "../Piece/Piece";
import {Serializable} from "../../../../Common/Serializable";

export class Tile implements Serializable {
    constructor(private pieces: Piece[] = []) {

    }

    getPieces() {
        return this.pieces;
    }

    addPiece(piece: Piece) {
        this.pieces.push(piece);

        return this;
    }

    hasPieces() {
        return !!this.pieces.length;
    }

    serialize() {
        return {
            pieces: this.pieces.map((piece: Piece) => {
              return piece.serialize();
            })
        };
    }
}