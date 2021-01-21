const BlogItem = ({ blog }) => {
  return ( 
    <div className='blog-preview'>
      <h2 className='blog-preview__title'>
        <a href="/">{ blog.title }</a>
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