import Header from "./Header";
import Main from './Main';
import './MusicPlayer.css';

function MusicPlayer(): JSX.Element {
    return (
        <article className="music-player">
            <Header />
            <Main />
        </article>
    )
}

export default MusicPlayer;