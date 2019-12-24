import * as express from 'express'
import * as bodyParser from 'body-parser';
import {ticTacToeRouter} from "./router/ticTacToeRoutes";
import {gameRouter} from "./router/gameRoutes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();

router.get('/', (req, res) => {
    return res.json({ message: "Yo! we're up" });
})

router.use('/games/ttt', ticTacToeRouter);
router.use('/games', gameRouter);

app.use(router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`[App]: Listening on port ${port}`)
});