import { useState } from 'react';
import './style.css'

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MovieRow = ({title, items}) => {

    const [scrollList, setScrollList] = useState(-400)

    const handleBefore = () => {
        let x = scrollList + Math.floor(window.screen.width/2)
        if(x > 0) {
            x=0
        }
        setScrollList(x)
    }

    const handleNext = () => {
        let x = scrollList - Math.floor(window.screen.width/2)
        let w = items.results.length*150
        if ((window.screen.width - w) > x ) {
            x = (window.screen.width - w) - 60
        }


        setScrollList(x)
    }

    return (
        <div className='movieRow'>
            <h2>{title}</h2>

            <div className='movieRow--buttonBefore' onClick={handleBefore}>
                <NavigateBeforeIcon style={{fontSize:'50'}} />
            </div>

            <div className='movieRow--buttonNext' onClick={handleNext}>
                <NavigateNextIcon style={{fontSize:'50'}} />
            </div>

            <div className='movieRow--listArea'>
                <div className='movieRow--list'style={{
                    marginLeft: scrollList,
                    width: items.results.length*150
                }}>
                    {items.results.length > 0 && items.results.map((i, k) => {
                        return (
                            <div className='movieRow--item' key={k}>
                                <img src={`https://image.tmdb.org/t/p/w300${i.poster_path}`} alt={i.original_title} />
                            </div>     
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MovieRow;