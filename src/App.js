import Nav from "./components/navbar/navBar";
import Card from "./components/productcard/productCard";
import { productDetails } from "./productDetails";

function App(props) {
  return (
    <div data-testid="app-home">
      <Nav cartTotal={props.total} />
      <main>
        <ul className="flex flex-wrap items-center justify-center">
        {Array.from({ length: 12 }, (_, i) => i).map((_, i) => (
          <li key={i}><Card
            key={i}
            id={i + 1}
            photo={productDetails[i].photo}
            name={productDetails[i].name}
            price={productDetails[i].price}
            quantity={productDetails[i].quantity}
            addToCart={props.addToCart} 
          /></li>
        ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
