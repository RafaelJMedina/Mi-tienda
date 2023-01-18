import React, {useContext} from 'react';
import { DataContext } from "../../context/DataProvider";
import ProductoItems, { ProductoItem } from "./ProductoItems";

export const ProductosLista = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos

    return (
    <>
    <h1> PRODUCTOS </h1>
    <div>
        {productos.map((producto) =>(
            <ProductoItems 
                key={producto.id}
                id={producto.id}
                title={producto.title}
                price={producto.price}
                image={producto.image}
                category={producto.category}
                cantidad={producto.cantidad}
            />
         ))}
    </div>
    </>
    );
};

export default ProductosLista;