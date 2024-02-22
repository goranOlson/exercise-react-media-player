import './Progress.css'

function Progress(): JSX.Element {

    return (
        <div className="box progress-box">
            <div className='progressor'>
                <div className='progress-bar'></div>
            </div>
            <div className="progress-times">
                <span className="progress-time">00:34</span>
                <span className="melody-lenght">03:51</span>
            </div>
        </div>
    );
}

export default Progress