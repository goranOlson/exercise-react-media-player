import PlayerImageBox from "./PlayerImageBox";
import PlayerMelody from "./PlayerMelody";
import PlayerProgress from "./PlayerProgress";
import PlayerControl from "./PlayerControl";
import './Player.css'

function Player(): JSX.Element {
    return (
        <section className="box player">
            <PlayerImageBox />
            <PlayerMelody />
            <PlayerProgress />
            <PlayerControl />
        </section>
    )
}

export default Player