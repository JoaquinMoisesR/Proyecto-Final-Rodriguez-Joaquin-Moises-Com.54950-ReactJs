import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);
  
    const increment = () => {
      if (quantity < stock) {
        setQuantity(quantity + 1);
      }
    };
    const decrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
    return (
      <div className="Counter">
        <div className="container text-center">
          <h4>{quantity}</h4>
          <button className="btn btn-outline-success m-2" onClick={increment}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button className="btn btn-outline-info m-2" onClick={() => onAdd(quantity)} disabled={!stock}>
            Agregar al carrito
          </button>
          <button
            className="btn btn-outline-danger m-2"
            onClick={decrement}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </div>
    );
  };
  
  export default ItemCount;