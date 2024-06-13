import './App.css'
import MovieForm from './components/MovieForm/MovieForm.tsx';
import {useState} from 'react';
import {IMovieItems} from './types.ts';
import MovieItems from './components/MovieItems/MovieItems.tsx';

const App = () => {
  const [movieItems, setMovieItems] = useState<IMovieItems[]>([
  ])
  console.log(movieItems)

  const addMovie = (movie:IMovieItems)=>{
    setMovieItems((prevState)=>[...prevState, movie])
  }

  const removeMovie = (movie:IMovieItems)=>{
    setMovieItems((prevState)=>{
      return  prevState.filter(item=> item.id !== movie.id)
    })
  }

  const changeMovieItemsName = (movie:IMovieItems)=>{
    setMovieItems((prevState)=>{
      return prevState.map((item)=>{
        if(item.id === movie.id){
          return{
            ...item,
            title: movie.title
          }
        }
        return item
      })
    })
  }
  return (
    <>
      <div className="border border-5">
        <MovieForm
          addMovie={addMovie}
        />
        <h3 className="">To watch List</h3>
        <MovieItems
          movieItems={movieItems}
          removeMovie={removeMovie}
          changeMovieItemsName={changeMovieItemsName}
        />
      </div>
    </>
  )
};

export default App
