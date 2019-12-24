import {Serializable} from "../../../../Common/Serializable";
import {PlayerID} from "./PlayerID";
import {Piece} from "../Piece/Piece";
import {PlayerStateEnum} from "./PlayerStateEnum";

export class Player implements Serializable {
    private state: PlayerStateEnum;

    constructor(protected id: PlayerID, protected name: string, protected pieces: Piece[]) {

    }

    getID() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getState() {
        return this.state;
    }

    fold() {
        return this.state = PlayerStateEnum.FOLDED;
    }

    getPieces() {
        return this.pieces;
    }

    hasPiece(piece: Piece) {
        return !!this.pieces.find((playerPiece) => {
            return piece.is(playerPiece);
        });
    }

    removePiece(piece: Piece) {
        let found = false;
        let count = this.pieces.length;

        this.pieces = this.pieces.filter((playerPiece) => {
            const isPiece = piece.is(playerPiece);

            if (isPiece) {
                found = true;
            }

            return isPiece && !found;
        });

        if (count === this.pieces.length) {
            throw new Error('Could not remove piece from player hand as it does not exist.')
        }

        return this;
    }

    serialize() {
        return {
            id: this.id.toString(),
            name: this.name,
            pieces: this.pieces.map((piece) => {
                return piece.serialize();
            })
        }
    }
}