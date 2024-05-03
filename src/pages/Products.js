function Products() {
  const products = [
    {
      title: "Pen",
      desc: "pend description sample... 123...xyz",
      image: "",
      price: 20,
      total_qty: 50,
    },
    {
      title: "White notebooks",
      desc: "white notebook description sample... 123...xyz",
      image: "",
      price: 75,
      total_qty: 100,
    },
    {
      title: "color pencils",
      desc: "Color penciles description sample... 123...xyz",
      image: "",
      price: 15,
      total_qty: 40,
    }
  ];

  return (
    <>
      <table>
        {products.map((x) => {
          return(<tr>
            <td>{x.title}</td>
          </tr>);
        })}
      </table>
    </>
  );
}

export default Products;
