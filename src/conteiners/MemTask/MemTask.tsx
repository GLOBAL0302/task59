import {useState} from 'react';
import {IChuckMem} from '../../types.ts';

const chuckImg = "https://media.gq.com/photos/5583008609f0bee56440d085/master/pass/news-politics-blogs-death-race-chucknorris1450.jpg"

const MemTask = () => {
  const[chuckMem, setChuckMem] = useState<IChuckMem>(
    {id:"",title:""}
  )


    const fetchData = async ()=>{
      const response = await fetch("https://api.chucknorris.io/jokes/random")
      if (response.ok){
        const data = await response.json()
        setChuckMem({
          id:data.id,
          title:data.value
        })
      }
    };

  // useEffect(() => {
  //   const fetchData = async ()=>{
  //     const response = await fetch(url)
  //     if(response.ok){
  //       const posts = await response.json() as BlogPost[]
  //       const newPosts = posts.map(post =>({
  //         id:post.id,
  //         title: post.title,
  //         author: "John Doe"
  //
  //       }))
  //       setPosts(newPosts)
  //     }
  //   }
  //   void fetchData()
  // }, []);


  return (
    <div>
      <img src={chuckImg} alt=""/>
      <p>{chuckMem.title}</p>
      <button onClick={fetchData}>
        Show me a joke
      </button>
    </div>
  );
};

export default MemTask;