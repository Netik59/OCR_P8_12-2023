import '../../utils/style/main.css'
import '../../utils/style/home.css'
import img_src_1 from '../../assets/img_src_1.svg'
import logementsData from '../../data/logements.json' // Supposé url pour la future base de données (pour l'instant l'url est uniquement un fichier JSON)
import Banner from '../../components/banner/Banner'
import Card from '../../components/Card'

const Home = () => {
  return (
    <div className="home">
      <Banner
        imgSrc={img_src_1}
        titleContent="Chez vous, partout et ailleurs"
      />
      <section className="gallery__section">
        <div className="gallery__div">
          {logementsData &&
            logementsData.map((logement, index) => (
              <Card
                key={logement.id}
                id={logement.id}
                cover={logement.cover}
                title={logement.title}
              />
            ))}
        </div>
      </section>
    </div>
  )
}

export default Home
