import WhiteLogo from '../../assets/logo_white.png'
import '../../utils/style/main.css'

function Footer() {
  return (
    <div className="footer__div displayFlex-alignCenter">
      <img className="footer__img" src={WhiteLogo} alt="Logo Kasa blanc" />
      <h1 className="footer__text">© 2020 Kasa. All rights reserved</h1>
    </div>
  )
}

export default Footer
