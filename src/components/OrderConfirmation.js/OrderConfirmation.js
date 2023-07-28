import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faPaste } from "@fortawesome/free-solid-svg-icons";
import { Button } from "bootstrap";

const OrderConfirmation = ({orderId}) => {
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(orderId);
            alert("Tu orden fue confirmada");
        }catch (error) {
            console.error("Error en tu confirmacion de orden:", error);
        }
    };

    return (
        <div className="text-center">
            <h1 className=" subtitle text-3xl font-bold mb-4">EL ID DE SU ORDEN ES:</h1>
            <div className="flex items-center justify-center">
                <p className="title text-2x1 font-semibold mr-2">{orderId}</p>
                <FontAwesomeIcon icon={faPaste} style={{color: '#fa9d4', cursor: "pointer"}}
                onClick={copyToClipboard}/>
            </div>
            <p className="subtitle text-lg mt-8">GRACIAS POR TU COMPRA!! AGROINDUSTRIA EL DESTINO TE DESA MUCHOS EXITOS!!</p>
            <NavLink className="button is-info" to="/">Volver al inicio</NavLink>
        </div>
    );
};

export default OrderConfirmation;