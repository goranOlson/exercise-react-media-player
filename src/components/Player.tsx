import PlayerImageBox from "./PlayerImageBox";
import PlayerMelody from "./PlayerMelody";

import './Player.css'
import Progress from "./Progress";
import PlayControll from "./PlayControll";

function Player(): JSX.Element {

    return (
        <section className="box player">
            <PlayerImageBox />
            <PlayerMelody />
            <Progress />
            <PlayControll />
        </section>
    )
}

export default Player