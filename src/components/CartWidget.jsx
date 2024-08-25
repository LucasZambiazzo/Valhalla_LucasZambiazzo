import { Link } from "react-router-dom";
import cart from "../assets/shopping-cart.png";

export const CartWidget = () => (
<Link to= "/cart">
<img src={cart}height={30}/>
<span>5</span>
</Link>
);