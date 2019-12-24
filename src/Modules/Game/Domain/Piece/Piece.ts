import {Serializable} from "../../../../Common/Serializable";
import {PlayerID} from "../Player/PlayerID";

export class Piece implements Serializable {
    constructor(private name: string, private owner: PlayerID) {

    }

    getOwner() {
        return this.owner;
    }

    is(piece: Piece) {
        return piece.name === this.name
            && piece.owner.is(this.owner);
    }

    serialize() {
        return {
            name: this.name,
            owner: this.owner.toString(),
        };
    }
}