import React, {
  useCallback,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShopContext from "../store/ShopCTXProvider";
import ShopList from "./ShopList";

const ShopForm = (props) => {
  const inputNameRef = useRef();
  const inputPriceRef = useRef();
  const inputDescRef = useRef();
  const [status, setStatus] = useState("");
  const shopCtx = useContext(ShopContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const shopItem = {
      id: Math.random().toString(),
      name: inputNameRef.current.value,
      price: parseFloat(inputPriceRef.current.value),
      desc: inputDescRef.current.value,
    };
    shopCtx.addItems(shopItem);
    setStatus(shopItem.id);
    // pushItemToFirebase(shopItem);
  };

  const pushItemToFirebase = useCallback(async (shopItem) => {
    let url =
      "https://atomic-matrix-193707-default-rtdb.firebaseio.com/shopCart/items.json";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(shopItem),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      const loadedData = [];
      // for(const k in data){
      //     loadedData.push({
      //         id: k,
      //         name: data[k].name,
      //         price: data[k].price,
      //         desc: data[k].desc,
      //     })
      // }

      const newData = {
        id: data.name,
        name: shopItem.name,
        price: shopItem.price,
        desc: shopItem.desc,
      };
      shopCtx.addItems(newData);
      setStatus("Item uploaded Successfully");
    } catch (err) {
      console.log(err);
    }
  }, []);

  // useEffect( () => {

  // },[status]);

  return (
    <>
      {/* <h4>{status}</h4> */}
      <Form onSubmit={submitHandler} className="m-5">
        <Container>
          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Name</Form.Label>
              </Col>
              <Col>
                <Form.Label>Price</Form.Label>
              </Col>
              <Col>
                <Form.Label>Desc</Form.Label>
              </Col>
              <Col>
                <Link to="/cart" className="ml-5 px-5 btn-warning">
                  Cart {shopCtx.totalCartItems}
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control type="name" ref={inputNameRef} />
              </Col>
              <Col>
                <Form.Control type="number" ref={inputPriceRef} />
              </Col>
              <Col>
                <Form.Control type="text" ref={inputDescRef} />
              </Col>
              <Col></Col>
            </Row>
          </Form.Group>
          <Button type="submit" className="mt-3">
            Add
          </Button>
        </Container>
      </Form>

      <ShopList />
    </>
  );
};

export default ShopForm;
