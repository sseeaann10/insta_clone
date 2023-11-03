import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import LeftSideNav from "./components/LeftSideNav";
import Register from "./pages/Register";
const App = () => {
  return (
    <div>
      <Router>
        {/* <Provider store={store}> */}
        <LeftSideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* </Provider> */}
      </Router>
    </div>
  );
}

export default App;
