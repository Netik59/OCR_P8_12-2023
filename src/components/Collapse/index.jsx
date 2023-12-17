import '../../utils/style/main.css'
import '../../utils/style/collapse.css'
import arrow_down from '../../assets/arrow_down.png'
import React, { useEffect, useRef, useState } from 'react'

function Collapse({ title, content, accordionClass, itemClass }) {
  const [isSelected, setSelected] = useState(false)
  const [height, setHeight] = useState(0) // Définir une hauteur initiale
  const contentRef = useRef()

  useEffect(() => {
    const h = contentRef.current.scrollHeight // Mesurer la hauteur du contenu
    setHeight(h)
    console.log(h)
  }, [])

  const toggle = () => {
    setSelected(!isSelected)
  }

  console.log(height)

  return (
    <div className={accordionClass}>
      <div className={itemClass}>
        <div className="title" onClick={() => toggle()}>
          <h2>{title}</h2>
          <img
            src={arrow_down}
            alt="Chevron vers le bas"
            className={isSelected ? 'arrow__open' : 'arrow__close'}
          />
        </div>

        <div
          style={{
            height: isSelected ? height + 'px' : '0px',
            transition: 'height 0.5s, transform 0.5s',
            transform: isSelected ? 'scaleY(1)' : 'scaleY(0)',
            transformOrigin: 'top',
            overflow: 'hidden', // Assurez-vous que le contenu masqué est caché
          }}
          className="content"
        >
          <div ref={contentRef}>{content}</div>
        </div>
      </div>
    </div>
  )
}

export default Collapse
