function Product(props) {
  return (
    <tr>
      <td>{props.product.title} - {props.product.desc}</td>
    </tr>
  );
}

export default Product;
