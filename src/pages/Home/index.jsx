import '../../utils/style/main.css'
import '../../utils/style/home.css'
import img_src_1 from '../../assets/img_src_1.svg'
import logementsData from '../../data/logements.json' // Supposé url pour la future base de données (pour l'instant l'url est uniquement un fichier JSON)
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <section className="background__section">
        <div className="background__div">
          <img className="background__img" src={img_src_1} alt="Arrière plan" />
          <h1 className="background__title">Chez vous, partout et ailleurs</h1>
        </div>
      </section>
      <section className="gallery__section">
        {logementsData &&
          logementsData.map((logement, index) => (
            <Link
              key={`link-${index}-${logement.id}`}
              to={`/housing-record/${logement.id}`}
            >
              <div
                key={`divGallery-${index}-${logement.id}`}
                className="oneGallery"
              >
                <img
                  key={`image-${index}-${logement.id}`}
                  className="oneImg"
                  src={logement.cover}
                  alt={logement.title}
                />
                <div
                  key={`div-${index}-${logement.id}`}
                  className="div__oneTxt"
                >
                  <p key={`title-${index}-${logement.id}`} className="oneTxt">
                    {logement.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </section>
    </div>
  )
}

export default Home
