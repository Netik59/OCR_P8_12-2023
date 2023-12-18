import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import '../../utils/style/main.css'

function Header() {
  const location = useLocation()

  return (
    <nav className="displayFlex-alignCenter">
      <Link to="/">
        <img src={Logo} alt="Logo Kasa rouge" />
      </Link>
      <div>
        <Link
          className={
            location.pathname === '/'
              ? 'StyledLink StyledLinkNav selected'
              : 'StyledLink StyledLinkNav'
          }
          to="/"
        >
          Accueil
        </Link>
        <Link
          className={
            location.pathname === '/about'
              ? 'StyledLink StyledLinkNav selected'
              : 'StyledLink StyledLinkNav'
          }
          to="/about"
        >
          A Propos
        </Link>
      </div>
    </nav>
  )
}

export default Header
