import React, { useContext, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import ShopContext from "../store/ShopCTXProvider";

const ShopList = (props) => {
  const shopCtx = useContext(ShopContext);

  const addItemToCartHandler = (e) => {
    const key = e.target.dataset.key;
    const quantity = parseInt(e.target.dataset.quantity);
    const item = shopCtx.items.filter((item) => {
        return item.id==key;
    })
    shopCtx.addItemToCart(item[0],quantity);
    console.log(item);
  };

  const tableContent = shopCtx.items.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.desc}</td>
      <td>
        <Button
          onClick={addItemToCartHandler}
          data-key={item.id}
          data-quantity="1"
          className="mx-2"
        >
          Buy 1
        </Button>
        <Button
          onClick={addItemToCartHandler}
          data-key={item.id}
          data-quantity="2"
          className="mx-2"
        >
          Buy 2
        </Button>
        <Button
          onClick={addItemToCartHandler}
          data-key={item.id}
          data-quantity="3"
          className="mx-2"
        >
          Buy 3
        </Button>
      </td>
    </tr>
  ));

  return (
    <>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{tableContent}</tbody>
        </Table>
      </Container>
    </>
  );
};
export default ShopList;
