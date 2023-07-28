import { Link } from "react-router-dom";
import "./Item.css";


const Item = ({ id, name, img, price, stock, category }) => {
  return (
    <div className="container w-50 justify-content-center">
      <div className="card img-hover shadow-lg mb-5 mt-5 bg-body-tertiary ">
        <div className="card-img-top">
          <article className="card-body text-center">
            <header>
              <h2 className="card-title">{name}</h2>
            </header>
            <picture>
              <img src={img} alt={name} className="mw-100" />
            </picture>
            <section>
              <p>Precio: ${price}</p>
              <p>Stock Disponible:{stock}</p>
            </section>
            <footer>
              <Link to={`/item/${id}`} className="link-hover border border-white px-3 pb-1 rounded-pill text-white text-decoration-none bg-secondary bg-gradient">Ver ficha</Link>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Item;