import icono from  "./assets/icono.png"
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import "../../components/CartWidget/Cartwidget.css";



const CartWidget = () => {
   
    const {cart} = useContext(CartContext)

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity,0)

    return (
        <div>
            <Link to='/cart' style={{display: totalQuantity > 0}}>
            <img className="logo" src={icono} alt="icono-carro" /> 
            <span>{totalQuantity}</span>
            </Link>
        </div>
    )
}

export default CartWidget