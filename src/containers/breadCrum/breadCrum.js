import React from "react";


const BreadCrum = (props) => {
    const {product} = props;
    return(
        <div>
            home {product.name} {product.title}
        </div>
    )
}

export default BreadCrum;