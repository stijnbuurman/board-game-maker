import {GameRepositoryInterface} from "../../Game/Repositories/GameRepository";
import {TicTacToe} from "../Domain/TicTacToe";
import {TicTacToePlayer} from "../Domain/Player/TicTacToePlayer";
import {Game} from "../../Game/Domain/Game/Game";

export class CreateTicTacToe {
    constructor(private gameRepository: GameRepositoryInterface) {

    }

    execute(players: TicTacToePlayer[]): Game {
        const game = TicTacToe.create(players);

        this.gameRepository.store(game);

        return game;
    }
}