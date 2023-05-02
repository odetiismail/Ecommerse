import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import Products from "./Products";
import Error from "./Error";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { fetchPosts } from "./reducer/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SinglePage from "./Components/singlePage";
function App() {
  const dispatch = useDispatch();
  const post = useSelector((sta) => sta.counter.status);

  //console.log(post)

  useEffect(() => {
    if (post === "idle") {
      dispatch(fetchPosts());
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleProduct/:id" element={<SinglePage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
