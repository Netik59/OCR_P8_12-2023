import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import '../../utils/style/main.css'

function Header() {
  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="Logo Kasa rouge" />
      </Link>
      <div>
        <Link className={`StyledLink`} to="/">
          Accueil
        </Link>
        <Link className={`StyledLink`} to="/about">
          A Propos
        </Link>
      </div>
    </nav>
  )
}

export default Header
