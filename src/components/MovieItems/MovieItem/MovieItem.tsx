import {IMovieItems} from '../../../types.ts';
import React, {ChangeEvent, useState} from 'react';



interface Props{
  movieItem:IMovieItems
  removeMovie:(movie:IMovieItems)=>void
  changeMovieItemsName:(movie:IMovieItems)=>void
}

const MovieItem:React.FC<Props> = ({movieItem, removeMovie, changeMovieItemsName}) => {
  const [currentMovie, setCurrentMovie] = useState<IMovieItems>({
    title:movieItem.title,
    id: movieItem.id
  })

  const onChange = (event:ChangeEvent<HTMLInputElement>)=>{
    setCurrentMovie((prevState)=>{
      return{
        ...prevState,
        title: event.target.value
      }
    })
    changeMovieItemsName(currentMovie)
  }

  return (
    <div
      className="form-group col-8 d-flex mb-3 gap-3">
      <label htmlFor="name"></label>
      <input
        onChange={onChange}
        className="form-control"
        id="name"
        name="name"
        value={currentMovie.title}
        type="text"/>
      <img
        onClick={()=>removeMovie(currentMovie)}
        style={{width:"50px"}}
        src="https://cdn-icons-png.flaticon.com/512/66/66847.png"
        alt="cancelPic"/>
    </div>
  );
};

export default MovieItem;