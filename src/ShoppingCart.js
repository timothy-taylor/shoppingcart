import Nav from "./components/navbar/navBar";
import Footer from "./components/footer/footer";
import centsToDollars from "./components/centsToDollars";

const ShoppingCart = (props) => {
  const displayCart = () => {
    if (props.cart.length) {
      return (
        <div className="flex flex-col items-center justify-center">
          <table className="w-4/5 table-auto lg:w-1/2">
            <thead>
              <tr>
                <th className="text-left bg-slate-100">Product</th>
                <th>Price</th>
                <th className="bg-slate-100">Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {props.cart.map((x) => (
                <tr key={x.id}>
                  <td key={x.id} className="bg-slate-100">{x.name}</td>
                  <td key={x.id} className="text-center">{centsToDollars(x.price)}</td>
                  <td key={x.id} className="text-center bg-slate-100">{x.quantity}</td>
                  <td key={x.id} className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 hover:text-slate-500 hover:cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={() => props.onRemove(x.id)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 className="m-6 text-2xl">
            Total: {centsToDollars(props.total)}
          </h2>
          <button className="p-5 text-white uppercase rounded-sm bg-slate-700 hover:bg-slate-500">Checkout</button>
        </div>
      );
    } else {
      return (
        <p className="text-2xl text-center">Your cart is empty.</p>
      );
    }
  };

  return (
    <div data-testid="cart" className="">
      <Nav cartTotal={props.total} />
      <main className="">
        {displayCart()}
      </main>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
