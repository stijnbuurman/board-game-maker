import * as express from 'express'
import {TicTacToePlayer} from "../../../Modules/TicTacToe/Domain/Player/TicTacToePlayer";
import {CreateTicTacToe} from "../../../Modules/TicTacToe/UseCases/CreateTicTacToe";
import {GameRepositoryInterface} from "../../../Modules/Game/Repositories/GameRepository";
import {Move} from "../../../Modules/Game/Domain/Move/Move";
import {MakeMoveTicTacToe} from "../../../Modules/TicTacToe/UseCases/MakeMoveTicTacToe";
import {Player} from "../../../Modules/Game/Domain/Player/Player";

export class TicTacToeController {

    private createGame: CreateTicTacToe;
    private makeMove: MakeMoveTicTacToe;

    constructor(private gameRepository: GameRepositoryInterface) {
        this.createGame = new CreateTicTacToe(gameRepository);
        this.makeMove = new MakeMoveTicTacToe(gameRepository);
    }

    create(request: express.Request, response: express.Response) {
        let players = request.body.players.map((playerDTO) => {
            return new TicTacToePlayer(playerDTO.name, playerDTO.mark);
        });

        let game = this.createGame.execute(players);

        response.send(
            game.serialize()
        );
    }

    move(request: express.Request, response: express.Response) {
        const gameID = request.params.gameID;

        try {
            let game = this.makeMove.execute(gameID, new Move(
                new TicTacToePlayer(request.body.player.name, request.body.player.mark),
                request.body.move.x,
                request.body.move.y
            ));

            response.send(game.serialize());

        } catch(e) {
            response.send({
                message: e.message,
                move: e.move,
            })
        }

    }
}