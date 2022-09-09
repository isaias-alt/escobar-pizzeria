import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AboutUs from "./pages/AboutUs";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/aboutus" element={ <AboutUs /> } />
        <Route path="/menu" element={ <Menu /> } />
        <Route path="/signin" element={ <SignIn /> } />
        <Route path="/admin" element={ <AdminPage /> }/>
      </Routes>
    </Router>
  );
}

export default App;
