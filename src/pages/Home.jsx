import React from 'react'
import BlogList from '../components/BlogList'
import useFetch from 'functions/useFetch'

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')  

  return (  
    <div className="home my-3">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={ blogs.slice(0).reverse() } title='All' /> }
    </div>
  )
}
 
export default Home