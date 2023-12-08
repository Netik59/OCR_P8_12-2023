import '../../utils/style/main.css'
import '../../utils/style/collapse.css'
import arrow_up from '../../assets/arrow_up.png'
import arrow_down from '../../assets/arrow_down.png'
import React, { useState } from 'react'

function Collapse() {
  const [selected, setSelected] = useState(null)

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null)
    }

    setSelected(index)
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, index) => {
          return (
            <div className="item">
              <div className="title" onClick={() => toggle(index)}>
                <h2>{item.title}</h2>
                {selected === index ? (
                  <img src={arrow_down} alt="Chevron vers le bas" />
                ) : (
                  <img src={arrow_up} alt="Chevron vers le haut" />
                )}
              </div>
              <div
                className={
                  selected === index ? 'content show ' : 'content close'
                }
              >
                <p>{item.content}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const data = [
  {
    title: `Fiabilité`,
    content: `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.`,
  },

  {
    title: `Respect`,
    content: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`,
  },

  {
    title: `Service`,
    content: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`,
  },

  {
    title: `Sécurité`,
    content: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`,
  },
]

export default Collapse
