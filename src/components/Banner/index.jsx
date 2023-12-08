import '../../utils/style/main.css'
import '../../utils/style/banner.css'

function Banner({ imgSrc, titleContent }) {
  return (
    <section className="banner__section">
      <div className="banner__div">
        <img className="banner__img" src={imgSrc} alt="Arrière plan" />
        <h1 className="banner__title">{titleContent}</h1>
      </div>
    </section>
  )
}

export default Banner
