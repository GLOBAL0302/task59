import {IMovieItems} from '../../types.ts';
import React from 'react';
import MovieItem from './MovieItem/MovieItem.tsx';

interface Props{
  movieItems:IMovieItems[]
  removeMovie:(movie:IMovieItems)=>void
  changeMovieItemsName:(movie:IMovieItems)=>void
}
const MovieItems:React.FC<Props> = ({movieItems, removeMovie, changeMovieItemsName}) => {

  return (
    <>
      <div className="p-5">
        {movieItems.map((movie)=>(
          <MovieItem
            key={movie.id}
            removeMovie={removeMovie}
            changeMovieItemsName={changeMovieItemsName}
            title={movie.title}
            id={movie.id}
            />
        ))}

      </div>
    </>
  );
};

export default MovieItems;