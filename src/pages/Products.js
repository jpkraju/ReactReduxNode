import products from "../utils/products.json"
import CartInfo from "../Components/cart/CartInfo"
import "../Components/cart/cart.css"

function Products() {
  return (
    <>
      <div className='cart'>
        <div className="cartWrapper">
          <div className="headDiv"> <h3 className="head">Your Cart ({products.length} items)</h3></div>
          <div className="tabDiv">
            <table className="tab">
              <thead className='CartThead'>
                <tr className='theadRow'>
                  <td className='theadCol1'>Item</td>
                  <td className='theadCol2'>description</td>
                  <td className='theadCol3'>Price</td>
                  <td className='theadCol4'>Quantity</td>
                  <td className='theadCol5'>Total</td>
                </tr>
              </thead>
              <tbody className='cartTbody'>
              
                {
                  products.map((x,index) => (<CartInfo product={x} index={index}/>))
                }
                
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  );
}

export default Products;
