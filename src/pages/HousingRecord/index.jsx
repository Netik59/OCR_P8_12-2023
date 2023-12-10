import '../../utils/style/main.css'
import '../../utils/style/housingRecord.css'
import arrow_back from '../../assets/arrow_back.png'
import arrow_forward from '../../assets/arrow_forward.png'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import logementsData from '../../data/logements.json' // Supposé url pour la future base de données (pour l'instant l'url est uniquement un fichier JSON)
import Collapse from '../../components/Collapse'

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
  const equipments = logement.equipments

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
        <p className={nbPictures === 1 ? 'counter hide' : 'counter'}>
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
        <h2 className="location">{logement.location}</h2>
        <div className="tags__div">
          {tags &&
            tags.map((tag, index) => (
              <button className="tags__button" key={`tag-${index}-${tag}`}>
                {tag}
              </button>
            ))}
        </div>
        <div className="collapse">
          <Collapse
            key={`description-${logement.id}`}
            title={'Description'}
            content={logement.description}
          />
          <Collapse
            key={`equipment-${logement.id}`}
            title={'Equipement'}
            content={
              <ul className="ul__equipment">
                {equipments.map((item, index) => (
                  <li className="li__equipment">{item}</li>
                ))}
              </ul>
            }
          />
        </div>
      </section>
    </div>
  )
}

export default HousingRecord
