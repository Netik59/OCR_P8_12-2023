import '../../utils/style/main.css'
import '../../utils/style/starsAndHost.css'
import starActivePNG from '../../assets/star-active.png'
import starInactivePNG from '../../assets/star-inactive.png'

function StarsAndHost({ rating, host }) {
  const starActive = []
  const starInactive = []
  let nbStarInactive
  for (let index = 0; index < rating; index++) {
    starActive.push(
      <img
        key={`starActive-${index}`}
        src={starActivePNG}
        alt="Etoile active"
      />
    )
  }

  if (rating !== 5) {
    nbStarInactive = 5 - rating
  }

  for (let index = 0; index < nbStarInactive; index++) {
    starInactive.push(
      <img
        key={`starInactive-${index}`}
        src={starInactivePNG}
        alt="Etoile innactive"
      />
    )
  }

  return (
    <div className="starsAndHost">
      <div className="host">
        <h2 className="hostName">{host.name}</h2>
        <img
          className="profile"
          src={host.picture}
          alt={`Profil de ${host.name}`}
        />
      </div>
      <div className="stars">
        {starActive}
        {starInactive}
      </div>
    </div>
  )
}

export default StarsAndHost
