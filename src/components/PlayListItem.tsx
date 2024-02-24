import { IListItem } from '../interfaces';
import './PlayListItem.css'

interface IListProps {
    playList: IListItem[];
}

function PlayListItems({ playList }: IListProps): JSX.Element {
    // console.log('playList: ', playList);
    return (
        <>
          {playList.map((item) => {
            // const {id, image, melody, artist} = item;  // Object destructuring
            // console.log('melody: ' + melody);
            return (
                <div className="box play-list-item" key={item.id}>
                    <img className="image" src={item.image} alt="Higher And Higher / Scream Inc" />
                    <div className='melody-info'> 
                        <div className='txt melody'>{item.melody}</div>
                        <div className='txt artist'>{item.artist}</div>
                    </div>
                    <i className="material-icons icon-play">play_circle_filled</i>
                </div>
            );
          })}
        </>
    );
}

export default PlayListItems;