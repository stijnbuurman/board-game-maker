import {Move} from "../Move/Move";
import {Serializable} from "../../../../Common/Serializable";

export class InvalidMoveError extends Error implements Serializable {
    constructor(public message: string, private move: Move) {
        super(message);
        this.name = 'InvalidMoveError';
    }

    serialize() {
        return {
            error: {
                message: this.message,
                move: this.move,
            }
        }
    }
}