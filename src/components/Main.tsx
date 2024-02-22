import './Main.css'
import PlayList from './PlayList';
import Player from './Player';


function Main() : JSX.Element {

    return (
        <main className='page-main'>
            <PlayList />
            <Player />
        </main>
    
    )


}

export default Main;