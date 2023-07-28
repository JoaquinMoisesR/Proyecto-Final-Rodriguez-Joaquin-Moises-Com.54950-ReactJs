import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";


const Home = () => {
  return(
      <div>
          <h1 className="text-center subtitle">BIENVENIDOS!! AGROINDUSTRIA "EL DESTINO"</h1>
          <ItemListContainer greeting={"SITIO DE PRODUCTOS AGROINDUSTRIALES PARA EL PRODUCTOR NACIONAL"}/>
      </div>
  )
}

export default Home;