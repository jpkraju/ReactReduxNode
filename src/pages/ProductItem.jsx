import React from 'react';
import "./productItem.css"
import { useParams, useLocation } from 'react-router-dom';

const ProductItem = () => {

    const { id } = useParams();
    const location = useLocation();
    const { product } = location.state || {};


//    ---------------product item repeating two times-------------

    console.log('++', id);
    console.log('>>>', product)

// ---------------------------------------------------------------

    return (
        <div>
            
            <div className='productItemContainer'>
                <div className="productItemLeft">
                    <div className="imgdiv"><img src={product.image} alt="img" className="productImg" /></div>
                </div>
                <div className="productItemRight">
                <h3 className="itemHeading">{product.title}</h3>
                <hr/>
                    <div className="itemDisc">
                        <p>{product.desc}</p>
                        {/* <p>{product.descs}</p> */}
                        {/* <hr/>  */}
                        <p><b>price</b> : {product.price} Rs</p>
                    </div>
                </div>
                {/* <h3 className="itemHeading">{product.title}</h3>
            <p>{product.desc}</p> */}
            </div>
        </div>
    );
};

export default ProductItem;
