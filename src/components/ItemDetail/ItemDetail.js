import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
  
  const {addItem} = useContext(CartContext);
  const [quantityAdded , setQuantityAdded] = useState(0);

  const handleOnAdd = (quantity)=>{
    setQuantityAdded(quantity)

    const item = {
      id,
      name,
      price,
    }

    addItem(item,quantity)
  }

  return (
    <div className="container w-50 card shadow-lg mb-5 mt-5 bg-body-tertiary">
      <div className="card-img-top">
        <article className="card-body text-center">
          <header>
            <h2 className="card-title">{name}</h2>
          </header>
          <picture>
            <img src={img} alt={name} />
          </picture>
          <section>
            <div>
              <h2>Descripcion</h2>
              <p>{description}</p>
            </div>
            <p>Precio: ${price}</p>
          </section>
          <footer> 
            {
              quantityAdded > 0 ? (
                <Link to='/cart' className="btn btn-outline-info m-2">Finalizar Compra</Link>
              ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
              )
            }

          </footer>
        </article>
      </div>
    </div>
  );
};

export default ItemDetail;