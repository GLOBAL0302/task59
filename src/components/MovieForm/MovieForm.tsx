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
          <div className="input-group mb-3 p-5">
            <label htmlFor="name"></label>
            <input
              type="text"
              className="form-control col-4"
              id="name"
              name="name"
              value={currentMovie}
              onChange={(e)=>setCurrentMovie(e.target.value)}
            />
            <button className="btn btn-outline-secondary col-4" type="submit" id="button-addon2">Button</button>
          </div>
      </form>
    </>
  );
};

export default MovieForm;