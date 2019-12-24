import {Serializable} from "../../../../Common/Serializable";

export class InvalidSetupError extends Error implements Serializable {
    constructor(public message: string) {
        super(message);
        this.name = 'InvalidSetupError';
    }

    serialize() {
        return {
            error: {
                message: this.message,
            }
        }
    }
}