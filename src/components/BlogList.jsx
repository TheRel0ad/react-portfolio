import BlogItem from "./BlogItem"

const BlogList = ({ blogs, title }) => {
  return ( 
    <div className="blog-list">
      <h2 className='title'>{ title }</h2>
      {blogs.length !== 0 ? 
        blogs.map(blog => (
          <BlogItem 
            blog={blog} 
            key={blog.id}
          />
        )) 
        :
        <div className="my-2 inner-content">
          There are no blogs here
        </div>
      }
    </div>
   )
}
 
export default BlogList