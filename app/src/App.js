import { useEffect, useState } from "react";
import './App.css'

import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import MovieRow from "./components/MovieRow";
import { data } from "./helpers/Requests";

import Loading from './assets/loading.gif'


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

      <footer>
        <p>
          Criado com muito ♥ por <a href="https://www.linkedin.com/in/hugoaguiar87/" target='_blank' rel="noreferrer" >Hugo Aguiar</a>
        </p>
        <p>
          Todos direitos de imagem reservados para Netflix
        </p>
        <p>
          Todos os dados dos filmes foram pegos em <a href="https://developers.themoviedb.org/3/getting-started/introduction" target='_blank' rel="noreferrer" >themoviedb.org</a>
        </p>
      </footer>

      {movieList.length <=0 && 
        <div className="loading">
          <img src={Loading} alt="loading..."/>
        </div>
      }
    </div>
  )
}

export default App;