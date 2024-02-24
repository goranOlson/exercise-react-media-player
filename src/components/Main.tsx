import PlayList from './PlayList';
import Player from './Player';
import './Main.css'

function Main() : JSX.Element {
    return (
        <main className='page-main'>
            <PlayList />
            <Player />
        </main>
    )
}

export default Main;