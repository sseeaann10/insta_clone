import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import LeftSideNav from "./components/LeftSideNav";

const App = () => {
  return (
    <div>
      <Router>
        {/* <Provider store={store}> */}
        <LeftSideNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* </Provider> */}
      </Router>
    </div>
  );
}

export default App;
