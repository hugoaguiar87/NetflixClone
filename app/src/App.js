import { useEffect, useState } from "react";
import './App.css'

import FeaturedMovie from "./components/FeaturedMovie";
import MovieRow from "./components/MovieRow";
import { data } from "./helpers/Requests";


const App = () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async() => {
      let list = await data.getHomeList()
      setMovieList(list)

      let movieListFeatured = list.filter((i) => { return i.slug === 'originals'})
      let selectRandomMovie = Math.floor( Math.random()*(movieListFeatured[0].items.results.length - 1) )
      let movieSelected = movieListFeatured[0].items.results[selectRandomMovie]
      let getInfosMovieSelected = await data.getMovieInfo(movieSelected.id, 'tv')

      setFeaturedData(getInfosMovieSelected)
    }

    loadAll()
  }, [])


  return (
    <div className="page">

      {featuredData && <FeaturedMovie item= {featuredData} />}

      <section className="lists">
        {movieList.map((iten, key) => {
          return (
            <MovieRow key={key} title={iten.title} items={iten.items} />
          )
        })}
      </section>
    </div>
  )
}

export default App;