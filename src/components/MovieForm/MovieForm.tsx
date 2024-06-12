import React, {useState} from 'react';
import {IMovieItems} from '../../types.ts';

interface Props{
  addMovie:(movie:IMovieItems)=> void
}

const MovieForm:React.FC<Props> = ({addMovie}) => {
  const [currentMovie, setCurrentMovie] = useState("")
  const onFormSubmit = (event:React.FormEvent)=>{
    event.preventDefault()
    addMovie({
      title: currentMovie,
      id: Math.random()
    })
    setCurrentMovie("")
  }
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name"></label>
          <input
            onChange={(e)=>setCurrentMovie(e.target.value)}
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={currentMovie}/>
        </div>
        <button
          className="col-4 btn btn-primary"
          type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default MovieForm;