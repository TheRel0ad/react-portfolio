import React, { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => res.json())
        .then(data => {
          setBlogs(data)
          setIsPending(false)
        })
    }, 2000)
  }, [])
    
  return (  
    <div className="home">
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList 
        blogs={ blogs } 
        title='All' 
      />}
    </div>
  )
}
 
export default Home