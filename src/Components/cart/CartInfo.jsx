import React from 'react'
import { useNavigate } from "react-router-dom";

export default function CartInfo({ product }) {
    
    const navigate = useNavigate();
    const productItemDetail = () => {
        console.log('*');
        navigate(`/productItem/${product.id}`, { state: { product } });
    }

    return (
        <tr className="tbodyRow">

            <td className="item">
                <div className="tbodyImg" onClick={productItemDetail}>
                    <img src={product.image} alt="img" className="productImg" />
                </div>

            </td>
            <td>
                <div>{product.title}</div>
                <div className="tbodyImgDisc">
                    <p className="dec">{product.desc}</p>
                </div>

            </td>
            <td className="price">{product.price}</td>
            <td className="quantity">{product.quantity}</td>
            <td className="total">{product.price * product.quantity}</td>

        </tr>
    )
}
