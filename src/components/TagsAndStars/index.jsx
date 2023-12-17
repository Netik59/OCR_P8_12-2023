import '../../utils/style/main.css'
import '../../utils/style/tagsAndStars.css'
import starActivePNG from '../../assets/star-active.png'
import starInactivePNG from '../../assets/star-inactive.png'

function TagsAndStars({ rating, tags }) {
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
    <div className="tagsAndStars">
      <div className="tags__div">
        {tags &&
          tags.map((tag, index) => (
            <button className="tags__button" key={`tag-${index}-${tag}`}>
              {tag}
            </button>
          ))}
      </div>
      <div>
        {starActive}
        {starInactive}
      </div>
    </div>
  )
}

export default TagsAndStars
