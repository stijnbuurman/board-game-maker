import {Game} from "../Domain/Game/Game";

export interface GameRepositoryInterface {
    getByID(id: string);

    store(game: Game);

    findAll(): Game[];
}