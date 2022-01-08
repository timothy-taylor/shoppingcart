import { Link } from "react-router-dom";
import Header from "../header/header";
import centsToDollars from '../centsToDollars';

const NavBar = (props) => {
  const hasItems = () => {
    if (props.cartTotal) {
      return <span className="pl-2">({centsToDollars(props.cartTotal)})</span>
    } else {
      return null 
    }
  }
  return (
    <div className="items-center justify-between p-6 md:p-12 md:flex">
      <Header title="The Skate Wheel Shop" />
      <nav data-testid="nav" className="">
        <ul className="flex">
          <li>
            <Link to="/" className="flex hover:text-slate-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="pl-2 uppercase">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/cart" className="flex ml-4 hover:text-slate-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="pl-2 uppercase">Shopping Cart</span>
              {hasItems()}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
