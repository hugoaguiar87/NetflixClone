import { useEffect, useState } from "react";
import './App.css'

import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import MovieRow from "./components/MovieRow";
import { data } from "./helpers/Requests";


const App = () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)



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

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)
    
  }, [])


  return (
    <div className="page">

      <Header black={blackHeader}/>

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