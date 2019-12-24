import {Game} from "../../../../Game/Domain/Game/Game";
import {Tile} from "../../../../Game/Domain/Board/Tile";
import {PlayerID} from "../../../../Game/Domain/Player/PlayerID";
import {Board} from "../../../../Game/Domain/Board/Board";
import {WinRule} from "../../../../Game/Domain/Ruleset/WinRule";

export class TicTacToeWinRule extends WinRule {
    constructor(private amountInARow: number) {
        super();
    }


    getWinner(game: Game): PlayerID {
        return this.getWinnerOfSeries([
            ...this.getHorizontalWinSeries(game.getBoard()),
            ...this.getVerticalWinSeries(game.getBoard()),
            this.getForwardSlashSerie(game.getBoard()),
            this.getBackwardSlashSerie(game.getBoard())
        ]);
    }

    private getWinnerOfSeries(tilesSeries: Tile[][]) {
        for (const tilesSerie of tilesSeries) {
            const winner = this.getWinnerOfSerie(tilesSerie);
            if (winner !== undefined) {
                return winner;
            }
        }

        return undefined;
    }

    private getWinnerOfSerie(tiles: Tile[]) : PlayerID|undefined {
        let playerIDs = tiles.map((tile: Tile) => {
            return tile.getPieces()[0] ? tile.getPieces()[0].getOwner() : undefined;
        });

        let playerIDstrings = playerIDs.map((id) => id ? id.toString() : undefined);
        let seriePlayers = new Set<string>(playerIDstrings);
        if (seriePlayers.size > 1) {
            return undefined;
        }

        return playerIDs[0];
    }

    private getHorizontalWinSeries(board: Board) {
        let series = [];

        for (let y = 0; y < board.getHeight();y++) {
            series.push(board.getRow(y));
        }

        return series;
    }

    private getVerticalWinSeries(board: Board) {
        let series = [];
        for (let x = 0; x < board.getWidth();x++) {
            series.push(board.getColumn(x));
        }

        return series;
    }

    private getForwardSlashSerie(board: Board) {
        let serie = [];
        for (let x = 0,  y = board.getHeight() - 1; x < board.getWidth() && y >= 0;x++, y--) {
            serie.push(board.get(x, y));
        }

        return serie;
    }

    private getBackwardSlashSerie(board: Board) {
        let serie = [];
        for (let x = 0,  y = 0; x < board.getWidth() && y < board.getHeight();x++, y++) {
            serie.push(board.get(x, y));
        }

        return serie;
    }
}