import { IListItem } from '../interfaces';
import './PlayList.css'
import PlayListItem from './PlayListItem';



function PlayList(): JSX.Element {

    const list : IListItem[] = [
        {
            id: 1,
            melody: "Boys, Girls, toys & Words",
            artist: "Modern Pitch",
            image: "Boys,_Girls,_Toys_&_Words_-_Modern_Pitch.jpg"
        },
        {
            id: 2,
            melody: "Higher And Higher",
            artist: "Scream Inc",
            image: "Higher_And_Higher_-_Scream_Inc.jpg"
        },
        {
            id: 3,
            melody: "Not My Problem",
            artist: "All My Friends Hate Me",
            image: "Not_My_Problem_-_All_My_Friends_Hate_Me.jpg"
         },
        {
            id: 4,
            melody: "Old News",
            artist: "Hot Fiction",
            image: "Old_News_-_Hot_Fiction.jpg"
        }
    ];


    return (
        <section className='box play-list'>
            <header className='box'>
                <h2>Playlist</h2>
            </header>
            {   
                list.map( (item: IListItem) => (
                    <PlayListItem item={item} />
                    
                ))

                
            }
        </section>

    );

}

export default PlayList;