import {StateEnum} from "./StateEnum";
import {Serializable} from "../../../../Common/Serializable";
import {PlayerID} from "../Player/PlayerID";

export class GameState implements Serializable {
    constructor(private state: StateEnum, private winner?: PlayerID) {

    }

    getState() {
        return this.state;
    }

    getWinner() {
        return this.winner;
    }

    serialize() {
        return {
            state: this.state,
            winner: this.winner ? this.winner.toString() : undefined,
        };
    }
}