import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';

import PlayerName from './src/components/PlayerName';
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector('#root');
const $htmlBoardGame = BoardGame(6);
const $htmlPlayer1 = PlayerName(1);
const $htmlPlayer2 = PlayerName(2);

$root.insertAdjacentHTML('beforeend', $htmlPlayer1);
$root.insertAdjacentHTML('beforeend', $htmlPlayer2);

$root.insertAdjacentHTML('beforeend', $htmlBoardGame);
// for (let i = 1; i <= 6; i++) {
    // $root.insertAdjacentHTML('beforeend', $htmlCardGame);
// }


