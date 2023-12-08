import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import '../../utils/style/main.css'

function Header({ selected }) {
  return (
    <nav className="displayFlex-alignCenter">
      <Link to="/">
        <img src={Logo} alt="Logo Kasa rouge" />
      </Link>
      <div>
        <Link
          className={selected === true ? `StyledLink selected` : `StyledLink`}
          to="/"
        >
          Accueil
        </Link>
        <Link
          className={selected === false ? `StyledLink selected` : `StyledLink`}
          to="/about"
        >
          A Propos
        </Link>
      </div>
    </nav>
  )
}

export default Header
