import {IMovieItems} from '../../../types.ts';

interface Props{
  movieItem:IMovieItems
}

const MovieItem:React.FC<Props> = ({movieItem}) => {
  return (
    <div>
      <p>{movieItem.title}</p>
    </div>
  );
};

export default MovieItem;