import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore,getDoc,doc, count } from "firebase/firestore";
import Container from "react-bootstrap/Container";

import { ItemsContext } from "../contexts/ItemsContext";
import { ItemCount } from "./itemCount";



export const ItemDetailContainer = (props) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const {id} = useParams();
  
  const {addItem} = useContext(ItemsContext)

  const onAdd = (count) => {
    addItem({...item, quantity: count});
  };

  useEffect(() => {
    const db = getFirestore();
    
    const refDoc = doc(db, "items", id);
    
    getDoc(refDoc)
    .then((snapshot) => {
      setItem({id: snapshot.id, ...snapshot.data()});
    })
    .finally(() => setLoading(false));
  }, [id]);

   if (loading) return "wait";

 
  return (
    <Container className="mt-4">
      <h1>{item.title} </h1>
      <h2>{item.category}</h2>
      <h3>{item.description}</h3>
      <img src={item.imageId} alt={item.title} height={200} />
      <br />
      <b>${item.price}</b>
      <ItemCount stock={item.stock} onAdd={onAdd} />
    </Container>
  );
};
