import {IMovieItems} from '../../types.ts';
import React from 'react';
import MovieItem from './MovieItem/MovieItem.tsx';

interface Props{
  movieItems:IMovieItems[]
}
const MovieItems:React.FC<Props> = ({movieItems}) => {
  return (
    <>
      {movieItems.map((movie)=>(
        <MovieItem
          key={movie.id}
          movieItem={movie}/>
      ))}
    </>
  );
};

export default MovieItems;