import '../../utils/style/card.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ id, cover, title }) => (
  <Link to={`/housing-record/${id}`}>
    <div className="oneGallery">
      <img className="oneImg" src={cover} alt={title} />
      <div className="div__oneTxt">
        <p className="oneTxt">{title}</p>
      </div>
    </div>
  </Link>
)

export default Card
