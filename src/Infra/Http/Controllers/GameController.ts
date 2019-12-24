import * as express from 'express'
import {ListGames} from "../../../Modules/Game/UseCases/ListGames";
import {GameRepositoryInterface} from "../../../Modules/Game/Repositories/GameRepository";

export class GameController {
    private listGames: ListGames;

    constructor(private gameRepository: GameRepositoryInterface) {
        this.listGames = new ListGames(gameRepository);
    }

    list(request: express.Request, response: express.Response) {
        let games = this.listGames.execute();

        response.send(
            games.map((game) => {
                return game.serialize();
            })
        )
    }
}