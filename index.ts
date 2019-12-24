import {TicTacToePlayer} from "./src/Modules/TicTacToe/Domain/Player/TicTacToePlayer";
import {TicTacToe} from "./src/Modules/TicTacToe/Domain/TicTacToe";
import {Move} from "./src/Modules/Game/Domain/Move/Move";
import {PlayerID} from "./src/Modules/Game/Domain/Player/PlayerID";
import {AddPiece} from "./src/Modules/Game/Domain/Move/Actions/AddPiece";
import {XPiece} from "./src/Modules/TicTacToe/Domain/Piece/XPiece";
import {OPiece} from "./src/Modules/TicTacToe/Domain/Piece/OPiece";
import {GiveUp} from "./src/Modules/Game/Domain/Move/Actions/GiveUp";

const uuid = require('uuid/v4');

const X = TicTacToePlayer.createX(new PlayerID(uuid()));
const O = TicTacToePlayer.createO(new PlayerID(uuid()));

const game = TicTacToe.create([
    X,
    O,
]);

game.start();

game.makeMove(
    new Move(X.getID(), new AddPiece(
        new XPiece(X.getID()),
        0,
        0)
    )
);

game.makeMove(
    new Move(O.getID(), new AddPiece(
        new OPiece(O.getID()),
        2,
        2)
    )
);

game.makeMove(
    new Move(X.getID(), new GiveUp())
);


//
// game.makeMove(
//     new Move(X.getID(), new AddPiece(
//         new XPiece(X.getID()),
//         1,
//         0)
//     )
// );
//
// game.makeMove(
//     new Move(O.getID(), new AddPiece(
//         new OPiece(O.getID()),
//         2,
//         1)
//     )
// );
//
// game.makeMove(
//     new Move(X.getID(), new AddPiece(
//         new XPiece(X.getID()),
//         2,
//         0)
//     )
// );

console.log(game.getState().serialize());

// game.makeMove(
//     new Move(O.getID(), new AddPiece(
//         new OPiece(O.getID()),
//         2,
//         0)
//     )
// );