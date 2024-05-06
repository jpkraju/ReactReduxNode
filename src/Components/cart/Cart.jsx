import React from 'react'
import "./cart.css"

export default function Cart() {
    return (
        <div className='cart'>
            <div className="cartWrapper">
                <div className="headDiv"> <h3 className="head">Your Cart (4 items)</h3></div>
                <div className="tabDiv">
                    <table className="tab">
                        <thead className='CartThead'>
                            <tr className='theadRow' style={{border:'1px solid black'}}>
                                <td className='theadCol1'>Item</td>
                                <td className='theadCol2'>Price</td>
                                <td className='theadCol3'>Quantity</td>
                                <td className='theadCol4'>Total</td>
                            </tr>
                        </thead>
                        <tbody className='cartTbody'>
                            <tr className="tbodyRow">
                                <td className="item">
                                    <div className="tbodyImg">
                                        <img src="" alt="" className="productImg" />
                                    </div>
                                    <div className="tbodyImgDisc">
                                        <p className="dec">Notebook <br/> estimated ship date: june 6th<br/>Change</p>
                                    </div>
                                </td>
                                <td className="price">50</td>
                                <td className="quantity">20</td>
                                <td className="total">1000</td>
                            </tr>
                            <tr className="tbodyRow">
                                <td className="item">
                                    <div className="tbodyImg">
                                        <img src="" alt="" className="productImg" />
                                    </div>
                                    <div className="tbodyImgDisc">
                                    </div>
                                    <div className="tbodyImgDisc">
                                        <p className="dec">xyz <br/> estimated ship date: june 10th<br/>Change</p>
                                    </div>
                                </td>
                                <td className="price">70</td>
                                <td className="quantity">10</td>
                                <td className="total">700</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
