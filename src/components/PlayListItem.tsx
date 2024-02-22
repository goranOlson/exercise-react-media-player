import './PlayListItem.css'

function PlayListItem(): JSX.Element {
    return (
        <div className="box play-list-item">
            <img className="image" src="public/Higher_And_Higher_-_Scream_Inc.jpg" alt="Higher And Higher / Scream Inc" />
            <div className='melody-info'> 
                <div className='txt melody'>Higher And Higher Higher And Higher</div>
                <div className='txt artist'>Scream Inc</div>
            </div>
            <i className="material-icons icon-play">play_circle_filled</i>
        </div>
    )
}

export default PlayListItem;