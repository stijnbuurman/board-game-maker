import {Tile} from "./Tile";
import {Serializable} from "../../../../Common/Serializable";

export class TileGrid implements Serializable {
    constructor(private width: number, private height: number, private values: Tile[][] = []) {

    }

    static createSquare(size: number) {
        const grid = new TileGrid(size, size);

        grid.map(() => {
            return new Tile();
        });

        return grid;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    map(callback: (x, y) => Tile) {
        this.values = [];
        for(let x = 0; x < this.width; x ++) {
            this.values[x] = [];
            for (let y = 0; y < this.height; y++) {
                this.values[x][y] = callback(x, y);
            }
        }
    }

    forEach(callback: (x, y, value: Tile) => any) {
        for(let x = 0; x < this.width; x ++) {
            for (let y = 0; y < this.height; y++) {
                callback(x, y, this.get(x, y));
            }
        }
    }

    set(x: number, y: number, value: Tile) {
        this.values[x][y] = value;

        return this;
    }

    get(x: number, y: number): Tile | undefined {
        return this.values[x][y];
    }

    getRow(y: number) {
        return this.values.map((column) => {
            return column[y];
        })
    }

    getColumn(x: number) {
        return this.values[x].map((column) => {
            return column;
        });
    }

    getAll() {
        return this.values;
    }

    serialize() {
        let serializedTiles = this.values.map((row) => {
            return row.map((value) => {
                return value.serialize();
            })
        });

        return {
            width: this.width,
            height: this.height,
            tiles: serializedTiles,
        }
    }
}