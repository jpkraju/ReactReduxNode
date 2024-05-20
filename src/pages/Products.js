import products from "../utils/products.json"
import CartInfo from "../Components/cart/CartInfo"
import "../Components/cart/cart.css"

function Products() {
  // const products = [
  //   {
  //     id: 1,
  //     title: "Pen",
  //     desc: "pen description sample... 123...xyz",
  //     image: "images/1.jpg",
  //     price: 20,
  //     quantity: 50,
  //   },
  //   {
  //     id: 2,
  //     title: "White notebooks",
  //     desc: "white notebook description sample... 123...xyz",
  //     image: "images/2.jpg",
  //     price: 75,
  //     quantity: 100,
  //   },
  //   {
  //     id: 3,
  //     title: "color pencils",
  //     desc: "Color penciles description sample... 123...xyz",
  //     image: "images/3.jpg",
  //     price: 15,
  //     quantity: 40,
  //   },
  //   {
  //     id: 4,
  //     title: "sketch",
  //     desc: "sketch description sample... 123...xyz",
  //     image: "images/1.jpg",
  //     price: 15,
  //     quantity: 40,
  //   },
  //   {
  //     id: 5,
  //     title: "water color",
  //     desc: "water color description sample... 123...xyz",
  //     image: "images/2.jpg",
  //     price: 15,
  //     quantity: 40,
  //   }
  // ];

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
