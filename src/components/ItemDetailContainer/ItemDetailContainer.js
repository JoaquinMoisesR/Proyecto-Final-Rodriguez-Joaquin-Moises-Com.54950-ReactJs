import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
        .then((response)=>{
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        })
        .catch(error => {
            setError(error.message);
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [itemId])

    if (error) {
        return (
            <div>
                {error}
            </div>
        )
    }
    
    return(
        <div>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ItemDetail {...product} />
            )}    
        </div>
    )
}

export default ItemDetailContainer;