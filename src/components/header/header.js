import { Link } from "react-router-dom";

const Header = (props) => (
  <header>
    <Link to="/" className="flex text-3xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6i animate-spin"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h1 className="pl-2">{props.title}</h1>
    </Link>
  </header>
);

export default Header;
