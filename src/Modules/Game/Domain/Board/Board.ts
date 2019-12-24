import {Tile} from "./Tile";
import {Serializable} from "../../../../Common/Serializable";
import {TileGrid} from "./TileGrid";
import {Piece} from "../Piece/Piece";

export class Board extends TileGrid implements Serializable {

    static createSquare(size) {
        return new Board(
            size,
            size,
            TileGrid.createSquare(size).getAll()
        );
    }

    getTilesWithoutPieces() {
        let emptyTiles = [];
        this.forEach((x, y, tile: Tile) => {
            if (!tile.hasPieces()) {
                emptyTiles.push(tile);
            }
        });

        return emptyTiles;
    }

    getTilesWithPieces() {
        let takenTiles = [];
        this.forEach((x, y, tile: Tile) => {
            if (tile.hasPieces()) {
                takenTiles.push(tile);
            }
        });

        return takenTiles;
    }

    addPiece(piece: Piece, x: number, y: number) {
        this.get(x, y).addPiece(piece);

        return this;
    }
}