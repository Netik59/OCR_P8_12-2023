import '../../utils/style/main.css'
import '../../utils/style/collapse.css'
import arrow_up from '../../assets/arrow_up.png'
import arrow_down from '../../assets/arrow_down.png'
import React, { useState } from 'react'

function Collapse({ title, content }) {
  const [isSelected, setSelected] = useState(false)

  const toggle = () => {
    setSelected(!isSelected)
  }

  return (
    <div className="accordion">
      <div className="item">
        <div className="title" onClick={() => toggle()}>
          <h2>{title}</h2>
          <img
            src={arrow_down}
            alt="Chevron vers le bas"
            className={isSelected ? 'arrow__open' : 'arrow__close'}
          />
        </div>
        <div className={isSelected ? 'content show ' : 'content close'}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default Collapse
