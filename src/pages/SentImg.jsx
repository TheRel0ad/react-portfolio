import React, { createRef, useState } from "react"
import ProgressBar from 'react-bootstrap/ProgressBar'
import axios from 'axios'

const SentImg = () => {

  const inputFile = createRef()

  const [percentage, setPercentage] = useState(0)
  const [isUploaded, setIsUploaded] = useState(false)

  const handleUpload = e => {
    e.preventDefault()
    
    const files = inputFile.current.files

    const fd = new FormData()

    const url = 'http://192.168.0.101:5000/send'

    for (let i = 0; i < files.length; i++)
      fd.append( 'file', files[i] )
    
    const options = {
      onUploadProgress: (progressEvent) => {
        const {loaded, total} = progressEvent
        let percent = Math.floor( (loaded * 100) / total )
        console.log( `${loaded}kb of ${total}kb | ${percent}%` )

        if (percent <= 100)
          setPercentage(percent)
        if (percent === 100)
          setTimeout(() => {
            setPercentage(0)
            setIsUploaded(true)
          }, 800)
      }
    }
    
    axios.post(url, fd, options) 
      .then(res => console.log(res))
  }

  return ( 
    <div className="create my-3">
      <h2 className='title'>Add a New Blog</h2>
      <form onSubmit={e => handleUpload(e)}>
        <input 
          multiple
          type="file"
          ref={inputFile} 
        />
        <button className='btn btn--size-sm'>Отправить</button>
        {percentage > 0 && <ProgressBar now={percentage} active label={`${percentage}%`} />}
        {isUploaded && <ProgressBar now={100} active label={'Uploaded'} />}
      </form>
    </div>
  )
}
 
export default SentImg