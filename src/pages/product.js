import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../containers/breadCrum/breadCrum";
import ProductDisplay from "../containers/productDisplay/productDisplay";

const Item = () => {
    const {data} = useContext(ShopContext);
    const {productId} = useParams();
    const product = data.find((e)=> e.id === Number(productId));
    return(
        <div>
            <BreadCrum product={product}/>
            <ProductDisplay product={product }/>
        </div>
    )
}

export default Item;