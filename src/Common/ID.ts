import {PlayerID} from "../Modules/Game/Domain/Player/PlayerID";
import {Stringable} from "./Stringable";

export class ID implements Stringable {
    constructor(private uuid: string) {

    }

    getID(): string {
        return this.uuid;
    }

    is(playerID: PlayerID): boolean {
        return this.uuid === playerID.getID();
    }

    toString() {
        return this.uuid;
    }
}