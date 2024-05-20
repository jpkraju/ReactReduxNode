import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ProductItem = () => {

  const { id } = useParams();
  const location = useLocation();
  const { product } = location.state || {};


    // const [selectedItem, setSelectedItem] = useState(item);

    console.log('++',id);
    console.log('>>>',product)

    // setSelectedItem(item);

    // const items = [
    //     { id: 'item1', name: 'Item One', price: 100, description: 'This is item one.' },
    //     { id: 'item2', name: 'Item Two', price: 200, description: 'This is item two.' },
    //     // Add more items as needed
    // ];

    // const handleClick = (id) => {
    //     const item = productitem.find(item => item.id === id);
    //     setSelectedItem(item);
    // };

    return (
        <div>
         
            {/* {productitem.map(item => (
                <div key={item.id}>
                    <button onClick={() => handleClick(item.id)}>Get Data for {item.name}</button>
                </div>
            ))} */}
            {/* {onDetails.selectedItem && (
                <div>
                    <h3>Selected Item:</h3>
                    <p>id: {onDetails.selectedItem.id}</p>
                    <p>id: {onDetails.selectedItem.id}</p>
                    <p>title: {onDetails.selectedItem.title}</p>
                    <p>Description: {onDetails.selectedItem.desc}</p>
                    <p>image: {onDetails.selectedItem.image}</p>
                    <p>Price: {onDetails.selectedItem.price}</p>
                    <p>quantity: {onDetails.selectedItem.quantity}</p>
                </div>
            )} */}
        </div>
    );
};

export default ProductItem;
