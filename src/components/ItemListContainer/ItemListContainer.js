import React from 'react'
import { useState, useEffect } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams()

    useEffect(() => {
      setLoading(true);

      const collectionRef = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      :collection(db, 'products');

      getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
            const data = doc.data();
            return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch(error => {
        setLoading(false);
      })
      .finally(()=>{
        setLoading(false);
      });


    }, [categoryId])     
    
    return(
        <div>
            <h1 className='text-center'>{greeting}</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ItemList products={filteredProducts.length > 0 ? filteredProducts : products} />
            )}
        </div>
    );
}

export default ItemListContainer;