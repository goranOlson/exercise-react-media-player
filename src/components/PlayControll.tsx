import './PlayControll.css'

function PlayControll(): JSX.Element {

    return (
        <div className='box controller'>
            <span className="material-symbols-outlined btn-repeat">repeat</span>
            <div className='box play-controll'>
                <span className="material-symbols-outlined btn-previous">fast_rewind</span>
                <span className="material-symbols-outlined btn-play active">arrow_right</span>
                <span className="material-symbols-outlined btn-paus">pause</span>
                <span className="material-symbols-outlined btn-next">fast_forward</span>
            </div>
            <span className="material-symbols-outlined btn-random">shuffle</span>
        </div>

    );
}

export default PlayControll;