import {useState} from 'react';
import {IChuckMem} from '../../types.ts';

import ChuckItems from '../../components/ChuckItems/ChuckItems.tsx';

const chuckImg = 'https://media.gq.com/photos/5583008609f0bee56440d085/master/pass/news-politics-blogs-death-race-chucknorris1450.jpg';

const url = "https://api.chucknorris.io/jokes/random"
const MemTask = () => {
  const [chuckMem, setChuckMem] = useState<IChuckMem[]>([

    ]
  );


  const fetchData = async () => {
    const promises = []
    for(let i =0 ; i <5; i++){
      promises.push(url)
    }
    let promiseResponse = promises.map(async (item)=>{
      let response = await fetch(item)
      return await response.json()
    })
    Promise.all(promiseResponse)
      .then(response=> response.map((item)=>{
        setChuckMem((prevState)=>{
          return[...prevState, {title:item.value, id:item.id, img:chuckImg}]})
      }))

    // const response = await fetch(url)
    // if (response.ok){
    //   const data = await response.json()
    //   setChuckMem({
    //     id:data.id,
    //     title:data.value
    //   })
    // }
  };

  return (
    <div className="border border-5">
      <ChuckItems
        chuckMem={chuckMem}
      />
      <button onClick={fetchData}>
        Show me a joke
      </button>
    </div>
  );
};

export default MemTask;