import './style.css'

const MovieRow = ({title, items}) => {

    return (
        <div className='movieRow'>
            <h2>{title}</h2>

            <div className='movieRow--listArea'>
                <div className='movieRow--list'>
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