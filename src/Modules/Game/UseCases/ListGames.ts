import {GameRepositoryInterface} from "../Repositories/GameRepository";
import {TicTacToe} from "../../TicTacToe/Domain/TicTacToe";
import {TicTacToePlayer} from "../../TicTacToe/Domain/Player/TicTacToePlayer";
import {Game} from "../Domain/Game/Game";

export class ListGames {
    constructor(private gameRepository: GameRepositoryInterface) {

    }

    execute(): Game[] {
        return this.gameRepository.findAll();
    }
}