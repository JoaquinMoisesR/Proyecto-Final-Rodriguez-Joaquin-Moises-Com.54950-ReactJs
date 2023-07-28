import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import "../../components/NavBar/Navbar.css";



  const NavBar = () => {
    return (
        <nav className="navbar is-success">
          <Link to="/">
            <h2 className="title is-2 has-text-warning px-3">Agroindustria EL DESTINO</h2>
            </Link>
            <div className="buttons are-normal">
              <div>
                <NavLink to={'./category/Expeller Soja'}>
                <button className="button is-warning" >EXPELLER SOJA</button>
                </NavLink>
                </div>
                <div>
                <NavLink to={'./category/Expeller Maiz'}>  
                <button className="button is-warning">EXPELLER MAIZ</button>
                </NavLink> 
                </div>
                <div>
                <NavLink to={'./category/Aceite Biodiesel'}>
                <button className="button is-warning">ACEITE BIODIESEL</button>
                </NavLink>
                </div>
                <div>
                <NavLink to={'./QuienesSomos'}>
                <button className="button is-warning">QUIENES SOMOS</button>
                </NavLink>
                </div>
            </div>
            <div className="navbar-end">
            <CartWidget/>
            </div>
        </nav>
      )
  };
  
  export default NavBar;
