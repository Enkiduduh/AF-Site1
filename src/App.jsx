import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "../src/pages/Cart/Cart";
import Home from "../src/pages/Home/Home";
import Error from "../src/pages/Error/Error";
import FormCreateAccount from "../src/pages/FormCreateAccount/FormCreateAccount";
import View from "./layout/views/View";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/createAccount" element={<FormCreateAccount />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
