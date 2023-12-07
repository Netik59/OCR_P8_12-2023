import '../../utils/style/main.css'
import '../../utils/style/housingRecord.css'
import arrow_back from '../../assets/arrow_back.png'
import arrow_forward from '../../assets/arrow_forward.png'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import logementsData from '../../data/logements.json' // Supposé url pour la future base de données (pour l'instant l'url est uniquement un fichier JSON)

const HousingRecord = () => {
  const [logement, setLogement] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { id } = useParams()

  useEffect(() => {
    // Recherche de l'objet avec l'ID correspondant
    const foundLogement = logementsData.find((item) => item.id === id)

    // Mettre à jour l'état avec l'objet trouvé (ou null s'il n'est pas trouvé)
    setLogement(foundLogement)
  }, [id])

  if (!logement) {
    // Gérer le cas où aucun logement n'est trouvé pour l'ID spécifié
    return <div>Logement n°{id} non trouvé</div>
  }

  const pictures = logement.pictures
  const nbPictures = pictures.length
  const tags = logement.tags

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % nbPictures)
  }

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? nbPictures - 1 : prevIndex - 1
    )
  }

  return (
    <div className="mainContainer">
      <section className="carrousel__section">
        <img
          className="arrow_back"
          src={arrow_back}
          alt="Flèche de navigation gauche"
          onClick={goToPrevSlide}
        />
        <img
          className="arrow_forward"
          src={arrow_forward}
          alt="Flèche de navigation droite"
          onClick={goToNextSlide}
        />
        <p className="counter">
          {currentIndex + 1}/{nbPictures}
        </p>
        <img
          className="carrousel__img"
          src={pictures[currentIndex]}
          alt={logement.title}
        />
        <div className="shadowDiv"></div>
      </section>
      <section className="info__section">
        <h1>{logement.title}</h1>
        <h2>{logement.location}</h2>
        <div className="tags__div">
          {tags &&
            tags.map((tag, index) => (
              <button className="tags__button" key={`tag-${index}-${tag}`}>
                {tag}
              </button>
            ))}
        </div>
      </section>
    </div>
  )
}

export default HousingRecord
