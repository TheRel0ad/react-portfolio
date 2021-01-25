import { useState } from "react"

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Daler')
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    if (title.trim() === '' || body.trim() === '') {
      console.log('Fill the inputs please')
      return
    }

    const date = new Date().short()

    const blog = { title, body, author, date }

    setIsPending(true)

    setTimeout(() => {
      fetch('http://localhost:8000/blogs/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog)
      }).then(() => {
        console.log('new blog added')
        setTitle('')
        setBody('')
        setAuthor('Daler')
        setIsPending(false)
      })
    }, 500);
  }

  return ( 
    <div className="create my-3">
      <h2 className='title'>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input 
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label>Blog body</label>
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={e => setAuthor(e.target.value)}
        >
          <option value="daler">Daler</option>
          <option value="jacob">Jacob</option>
          <option value="tavhid">Tavhid</option>
        </select>
        { !isPending && <button className='btn'>Add blog</button> }
        { isPending && <button disabled className='btn'>Adding blog...</button> }
      </form>
    </div>
  )
}
 
export default Create