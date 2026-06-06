import axios from 'axios';
import React, { useEffect, useState } from 'react'

type Post = {
  "userId": number,
  "id": number,
  "title": string,
  "body": string,
  }

type Props = {}

const Posts = (props: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    //   .then(response => response.json())
    //   .then(json => setPosts(json))
    //   .catch(() => setError(true));

      axios.get('https://jsonplaceholder.typicode.com/users/1/posts')
      .then(result => {setPosts(result.data); setLoading(false)
      })
  }, []);
  
  if (error) {
    return <div>Ошибка загрузки данных</div>
  };
  
  if (loading) {
    return (
      <div className="loader-container">
  <svg
    className="heart-loader"
    viewBox="0 0 100 100"
    width="100"
    height="100"
  >
    <path
      className="heart-path"
      d="
        M50 85
        L43 78
        C20 57 5 43 5 25
        C5 10 17 0 30 0
        C40 0 47 6 50 14
        C53 6 60 0 70 0
        C83 0 95 10 95 25
        C95 43 80 57 57 78
        Z
      "
    />
  </svg>
</div>
    );
  }

  return(
    <div>{posts.map(Post => <p>{Post.body}</p>)}</div>
  )
}

export default Posts