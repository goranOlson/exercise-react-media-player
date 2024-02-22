import './PlayList.css'
import PlayListItem from './PlayListItem';

function PlayList(): JSX.Element {

    const nbrs = 4;

    return (
        <section className='box play-list'>

            <PlayListItem />
            <PlayListItem />
        </section>

    );

}

export default PlayList;