import {GameRepositoryInterface} from "../../Game/Repositories/GameRepository";
import {Game} from "../../Game/Domain/Game/Game";
import {Move} from "../../Game/Domain/Move/Move";
import {InvalidMoveError} from "../../Game/Domain/Error/InvalidMoveError";

export class MakeMoveTicTacToe {
    constructor(private gameRepository: GameRepositoryInterface) {

    }

    execute(gameID: string, move: Move): Game|InvalidMoveError {
        const game = this.gameRepository.getByID(gameID);

        if (!game) {
            throw new Error('Game not found');
        }

        game.makeMove(move);

        this.gameRepository.store(game);
        return game;
    }
}