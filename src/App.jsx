import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { useState } from "react";
import store from "./store";
import AuthLoader from "./components/AuthLoader";
import Cart from "../src/pages/Cart/Cart";
import Home from "../src/pages/Home/Home";
import Error from "../src/pages/Error/Error";
import Login from "./pages/Login/Login";
import LocationStore from "./pages/LocationStore/LocationStore";
import Account from "./pages/Account/Account";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  const [token, setToken] = useState();
  return (
    <>
      <Provider store={store}>
        <Router>
          <AuthLoader>
            <Header />
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login setToken={setToken} />} />
              <Route path="/account" element={<Account />} />
              <Route path="/location-store" element={<LocationStore />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </AuthLoader>
        </Router>
      </Provider>
    </>
  );
}

export default App;
