import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx"
import Location from "./components/Location.jsx"
import Login from "./components/Login.jsx"
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Login></Login>
      <Hero></Hero>
      <Location></Location>
    </>
  );
}

export default App;
