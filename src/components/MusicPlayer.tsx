import './MusicPlayer.css';

import Header from "./Header";
import Main from './Main';

function MusicPlayer(): JSX.Element {

    return (
        <article className="music-player">
            <Header />
            <Main />
        </article>
    )
    
}

export default MusicPlayer;