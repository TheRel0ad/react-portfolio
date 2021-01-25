import { useParams } from 'react-router-dom'
import useFetch from 'functions/useFetch'

const BlogDetails = () => {
  window.scrollTo(0, 0)
  
  const { id } = useParams()
  const { data: blog, error, isPanding } = useFetch('http://localhost:8000/blogs/' + id)

  return ( 
    <div className="blog-details my-3">
      { isPanding && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2 className='title'>{ blog.title }</h2>
          <div className="d-flex">
            { blog.date }
            <p className='ml-1'>Written by { blog.author }</p> 
          </div>
          <div>{ blog.body }</div>
        </article>
      ) }
    </div>
   )
}
 
export default BlogDetails