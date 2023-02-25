import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../src/pages/home";
import Book from "../src/pages/book";


function App() {
  return (
    <Router> 
    <Routes>
      <Route caseSensitive={false} path="/"  element={<Home />} />
      <Route caseSensitive={false} path=":id"  element={<Home />} />
      <Route caseSensitive={false} path="/book" element={<Book/>} />
    </Routes>     
  </Router>
  );
}

export default App;
