import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem.js/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, total, totalQuantity } = useContext(CartContext)
    if(totalQuantity === 0) {
        return (
            <div>
                <h1 className="is-uppercase">No hay productos en el carro de compras</h1>
                <Link to="/" className="button is-info">Volver al Inicio</Link>
            </div>
        )
    }
    return(
        <div>
            <h1>Carro de Compras</h1>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h2 className="title">Total: ${total}</h2>
            <button onClick={()=>clearCart()} className="button is-info">Vaciar carro de compras</button>
            <Link to="/checkout" className="button is-info">Checkout</Link>
        </div>
    )
}

export default Cart;