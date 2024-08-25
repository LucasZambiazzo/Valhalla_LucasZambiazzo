import Container from "react-bootstrap/Container";
import { useContext, useState } from "react";

import { ItemsContext } from "../contexts/ItemsContext";

const initialValues = {
  phone: "",
  email: "",
  name: "",
};
export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);

  const { reset, removeItem, items } = useContext(ItemsContext);

  return (
    <Container>
        <button onClick={reset}>Vaciar</button>
      {items?.map((i) => {
        return (
          <div key={i.id}>
            <h1>{i.title}</h1>
            <h2>{i.price}</h2>
            <h3>{i.quantity}</h3>
            <img src={i.imageId} height={100}></img>
            <span onClick={()=> removeItem(i.id)}>X</span>
          </div>
        );
      })}
    </Container>
  );
};
