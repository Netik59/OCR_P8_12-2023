import ErrorIllustration from '../../assets/404.png'
import '../../utils/style/main.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error displayFlex-alignCenter">
      <img src={ErrorIllustration} alt="Erreur 404" />
      <h1 className="error__txt">
        Oups! La page que vous demandez n'existe pas.
      </h1>
      <Link className={`StyledLink backToHome`} to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
