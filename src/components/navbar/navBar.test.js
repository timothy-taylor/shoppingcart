import ReactDOM from 'react-dom';
import Nav from './navBar';
import { BrowserRouter } from "react-router-dom";

test("renders without crashing", () => {
  const div = document.createElement('DIV');
  ReactDOM.render(<BrowserRouter><Nav /></BrowserRouter>,div);
});
