import './PlayListItem.css'
import { IListItem } from '../interfaces';





function PlayListItem(props: IListItem): JSX.Element {
    
    // console.log('props: ', props);
     
    const id: number = props.item.id;
    const image: string = props.item.image;
    const melody: string = props.item.melody;
    const artist: string = props.item.artist;

    return (
        <div className="box play-list-item" key={id}>
            <img className="image" src={image} alt="Higher And Higher / Scream Inc" />
            <div className='melody-info'> 
                <div className='txt melody'>{melody}</div>
                <div className='txt artist'>{artist}</div>
            </div>
            <i className="material-icons icon-play">play_circle_filled</i>
        </div>
    )
}

export default PlayListItem;