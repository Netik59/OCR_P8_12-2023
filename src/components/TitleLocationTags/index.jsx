import '../../utils/style/main.css'
import '../../utils/style/titleLocationTags.css'

function TitleLocationTags({ logement, tags }) {
  return (
    <div className="titleLocationTags">
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
    </div>
  )
}

export default TitleLocationTags
