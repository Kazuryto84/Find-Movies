import './App.css'
import  { useMovies } from './hooks/useMovies.js'
import  { Movies } from './components/Movies.jsx'

function App() {

  const { movies } = useMovies()

  return (  
  <div className = 'page'>
    
    <header>
    <h1>Buscador de Peliculas</h1>
    <form className='form'>
    <input placeholder='Introduce la peli a buscar'/>
    <button type='submit'>Buscar</button>
    </form>

    </header>

    <main>
      <Movies movies={movies} />
    </main>
  </div>
)
}

export default App
