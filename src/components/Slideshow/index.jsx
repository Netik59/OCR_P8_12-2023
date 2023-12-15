import '../../utils/style/slideshow.css'
import React, { useState } from 'react'
import arrow_back from '../../assets/arrow_back.png'
import arrow_forward from '../../assets/arrow_forward.png'

function Slideshow({ nbPictures, pictures, logement }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  function goToNextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % nbPictures)
  }

  function goToPrevSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? nbPictures - 1 : prevIndex - 1
    )
  }

  return (
    <>
      <img
        className={nbPictures === 1 ? 'arrow_back hide' : 'arrow_back'}
        src={arrow_back}
        alt="Flèche de navigation gauche"
        onClick={goToPrevSlide}
      />
      <img
        className={nbPictures === 1 ? 'arrow_forward hide' : 'arrow_forward'}
        src={arrow_forward}
        alt="Flèche de navigation droite"
        onClick={goToNextSlide}
      />
      <h2 className={nbPictures === 1 ? 'counter hide' : 'counter'}>
        {currentIndex + 1}/{nbPictures}
      </h2>
      <img
        className="carrousel__img"
        src={pictures[currentIndex]}
        alt={logement.title}
      />
      <div className="shadowDiv"></div>
    </>
  )
}

export default Slideshow
