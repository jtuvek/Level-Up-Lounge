import "./index.css";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <Header />
    </div>
  );
};

export default App;