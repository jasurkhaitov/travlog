import React, { useContext } from 'react'
import './Demo.css'
import { Contexts } from '../../context/Context'

export default function Demo() {

  const {setDemo} = useContext(Contexts)

  const closeVideo = () => {
    setDemo(false)
    document.body.style.overflow = ''
  }

  const handleModalVideo = (event) => {
    if(event.target.className === 'modal-demo') {
      setDemo(false)
      document.body.style.overflow = ''
    }
  }

  document.addEventListener('keydown', (event) => {
    if(event.code == 'Escape') {
      setDemo(false)
      document.body.style.overflow = ''
    }
  })

  return (
    <div className='modal-demo' onClick={handleModalVideo}>
        <div className="demo-content">

            <div className="closeDemo">
              <i class="fa-solid fa-xmark" onClick={closeVideo}></i>
            </div>

            <iframe width="100%" height="500" src="https://www.youtube.com/embed/Xj4E0Zry6K4?si=n47HvKCy5f4pbqzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
    </div>
  )
}