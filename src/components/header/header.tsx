import { HeaderStyle } from "./header-style";
import image from '../../assets/images/logos/logo-1.jpg'
import logo1 from '../../assets/images/logos/logo_border_red_large.png'

export const Header = () => {

  // gris #F4F4F4
  // red #C30000

  return(
    <HeaderStyle>
      <div className="header">
        <div className="header-left">
          <img src={logo1} alt="" />
          {/* INMUEBLES ALVAREZ */}
        </div>
        <div className="header-right">
          <nav className="header-right--navbar">
            <div className="header-right--navbar__item">INICIO</div>
            <div className="header-right--navbar__item">INMUEBLES</div>
            <div className="header-right--navbar__item">CONTACTO</div>
            <div className="header-right--navbar__item">TASACIONES</div>
            <div className="header-right--navbar__item">BUSCAR</div>
            {/* <div className="header-right--navbar__item">NOSOTROS</div>
            <div className="header-right--navbar__item">NOSOTROS</div> */}
          </nav>
        </div>
      </div>
    </HeaderStyle>
  )
}