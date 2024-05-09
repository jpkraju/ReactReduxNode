import React from 'react'


export default function cartInfo({ product }) {
    return (
        <tr className="tbodyRow">
            <td className="item">
                <div className="tbodyImg">
                    <img src={product.image} alt="img" className="productImg" />
                </div>
                <div className="tbodyImgDisc">
                    <p className="dec">{product.desc}</p>
                </div>
            </td>
            <td className="price">{product.price}</td>
            <td className="quantity">{product.quantity}</td>
            <td className="total">{product.price*product.quantity}</td>
        </tr>
    )
}
