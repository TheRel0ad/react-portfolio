import { Link } from 'react-router-dom'

const BlogItem = ({ blog }) => {
  return ( 
    <div className='blog-preview'>
      <h2 className='blog-preview__title'>
        <Link to={`/blogs/${blog.id}`}>{ blog.title }</Link>
      </h2>
      <p className='blog-preview__author'>
        Written by { blog.author }
      </p>
      <button 
        className='btn btn--theme-danger blog-preview__btn' 
      >Delete</button>
    </div>
   )
}
 
export default BlogItem