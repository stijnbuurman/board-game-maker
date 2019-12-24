import {GameRepositoryInterface} from "./GameRepository";
import {Game} from "../Domain/Game/Game";

export class MemoryGameRepository implements GameRepositoryInterface {
    private games: Map<string, Game> = new Map();

    getByID(id: string) {
        return this.games.get(id);
    }

    store(game: Game) {
        this.games.set(game.getID().toString(), game);
    }

    findAll(): Game[] {
        return Array.from(this.games.values());
    }

}