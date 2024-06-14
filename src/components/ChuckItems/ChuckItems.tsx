import {IChuckMem} from '../../types.ts';
import React from 'react';
import ChuckItem from './ChuckItem.tsx';

interface Props{
  chuckMem:IChuckMem[]
}
const ChuckItems:React.FC<Props> = ({chuckMem}) => {
  return (
    <div className="d-flex flex-wrap p-3">
      {chuckMem.map(mem=>(
        <ChuckItem
          key={mem.id}
          chuckImg={mem.img}
          title={mem.title}
        />
      ))}
    </div>
  );
};

export default ChuckItems;