import {Ruleset} from "../../../Game/Domain/Ruleset/Ruleset";
import {AllowedNumberOfPlayers} from "../../../Game/Domain/Ruleset/SetupRules/AllowedNumberOfPlayers";
import {ActionIsAllowedRule} from "../../../Game/Domain/Ruleset/MoveRules/ActionIsAllowed";
import {AddPiece} from "../../../Game/Domain/Move/Actions/AddPiece";
import {GameIsInProgress} from "../../../Game/Domain/Ruleset/MoveRules/GameIsInProgress";
import {TileExistsRule} from "../../../Game/Domain/Ruleset/MoveRules/TileExistsRule";
import {TileDoesNotHavePieces} from "../../../Game/Domain/Ruleset/MoveRules/TileDoesNotHavePieces";
import {PlayerIsOnTurnRule} from "./MoveRules/PlayerIsOnTurnRule";
import {PlayerHasPiece} from "../../../Game/Domain/Ruleset/MoveRules/PlayerHasPiece";
import {NoEmptyTilesLeft} from "../../../Game/Domain/Ruleset/EndRules/NoEmptyTilesLeft";
import {TicTacToeWinRule} from "./WinRules/TicTacToeWinRule";
import {GiveUp} from "../../../Game/Domain/Move/Actions/GiveUp";
import {AllOtherPlayersGaveUp} from "../../../Game/Domain/Ruleset/WinRules/AllOtherPlayersGaveUp";

export class TicTacToeRuleset extends Ruleset {
    constructor() {
        super(
            [
                new AllowedNumberOfPlayers(2, 2),
            ],
            [
                new ActionIsAllowedRule([AddPiece, GiveUp]),
                new GameIsInProgress(),
                new PlayerIsOnTurnRule(),
                new PlayerHasPiece(),
                new TileExistsRule(),
                new TileDoesNotHavePieces(),
            ],
            [
                new NoEmptyTilesLeft(),
            ],
            [
                new AllOtherPlayersGaveUp(),
                new TicTacToeWinRule(3),
            ]
        );
    }
}