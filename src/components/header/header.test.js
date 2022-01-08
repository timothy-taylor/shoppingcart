import ReactDOM from 'react-dom';
import Header from './header';
import { BrowserRouter } from "react-router-dom";

test("renders without crashing", () => {
  const div = document.createElement('DIV');
  ReactDOM.render(<BrowserRouter><Header /></BrowserRouter>,div);
});
