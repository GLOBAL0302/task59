import './App.css'
import MovieForm from './components/MovieForm/MovieForm.tsx';
import {useState} from 'react';
import {IMovieItems} from './types.ts';
import MovieItems from './components/MovieItems/MovieItems.tsx';

const App = () => {
  const [movieItems, setMovieItems] = useState<IMovieItems[]>([
  ])

  const addMovie = (movie:IMovieItems)=>{
    setMovieItems((prevState)=>[...prevState, movie])

  }
  return (
    <>
      <MovieForm
        addMovie={addMovie}
      />
      <MovieItems
        movieItems={movieItems}
      />
    </>
  )
};

export default App
