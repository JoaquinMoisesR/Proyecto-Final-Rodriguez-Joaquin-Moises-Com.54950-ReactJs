import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const CartItem =  ({ id, name, img, price, quantity}) => {
    
  const { removeItem } = useContext(CartContext);

  const subtotal = price*quantity;

  const handleRemoveItem = () =>{
    removeItem(id);
  };
  
  return (
    <div className="container w-50 justify-content-center">
      <div className="card img-hover shadow-lg mb-5 mt-5 bg-body-tertiary ">
        <div className="card-img-top">
          <article className="card-body text-center">
            <header>
              <h2 className="card-title">{name}</h2>
            </header>
            <picture>
              <img src={img} className="mw-100"/>
            </picture>
            <section>
              <p>Precio Unitario: ${price}</p>
              <p>Cantidad: {quantity}</p>
              <p>SubTotal: ${subtotal}</p>
              <p onClick={handleRemoveItem}>
                <FontAwesomeIcon className='Remover' icon={faTrash} />
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
);
}

export default CartItem