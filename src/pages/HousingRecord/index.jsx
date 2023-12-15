import '../../utils/style/main.css'
import '../../utils/style/housingRecord.css'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import logementsData from '../../data/logements.json' // Supposé url pour la future base de données (pour l'instant l'url est uniquement un fichier JSON)
import Collapse from '../../components/Collapse'
import { useNavigate } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'

const HousingRecord = () => {
  const [logement, setLogement] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const foundLogement = logementsData.find((item) => item.id === id)

    setLogement(foundLogement)
  }, [id])

  useEffect(() => {
    let isIdValid = false

    logementsData.forEach((logementItem) => {
      if (logementItem.id === id) {
        isIdValid = true
      }
    })

    if (!isIdValid) {
      navigate('/error')
    }
  }, [navigate, id])

  let nbPictures, pictures, host, tags, equipments

  if (logement && logement.pictures && logement.pictures.length) {
    pictures = logement.pictures
    nbPictures = pictures.length
    tags = logement.tags
    equipments = logement.equipments
    host = logement.host
  }

  return (
    <div className="mainContainer">
      {logement && logement.pictures && logement.pictures.length !== null ? (
        <>
          <section className="carrousel__section">
            <Slideshow
              nbPictures={nbPictures}
              pictures={pictures}
              logement={logement}
            />
          </section>
          <section className="info__section">
            <div className="titleAndHost">
              <h1>{logement.title}</h1>
              <div className="host">
                <h2 className="hostName">{host.name}</h2>
                <img
                  className="profile"
                  src={host.picture}
                  alt={`Profil de ${host.name}`}
                />
              </div>
            </div>
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
                title={'Description'}
                content={
                  <p key={`description-${logement.id}`}>
                    {logement.description}
                  </p>
                }
                accordionClass="accordion__housingRecord"
                itemClass="item__housingRecord"
              />
              <Collapse
                title={'Equipement'}
                content={
                  <ul className="ul__equipment">
                    {equipments.map((item, index) => (
                      <li
                        key={`equipment-${logement.id}-${index}`}
                        className="li__equipment"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                }
                accordionClass="accordion__housingRecord"
                itemClass="item__housingRecord"
              />
            </div>
          </section>
        </>
      ) : null}
    </div>
  )
}

export default HousingRecord
