import '../../utils/style/main.css'
import '../../utils/style/titleAndhost.css'

function TitleAndHost({ logement, host }) {
  return (
    <div className="titleAndHost">
      <h1>{logement.title}</h1>
      <div className="host">
        <h2 className="hostName">{host.name}</h2>
        <img
          className="profile"
          src={host.picture}
          alt={`Profil de ${host.name}`}
        />
      </div>
    </div>
  )
}

export default TitleAndHost
