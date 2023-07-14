import "./App.css";
import Foot from "./Components/Foot";
import Intro from "./Components/Intro";
import Jack from "./Components/Jack";
import Left from "./Components/Left";
import Nav from "./Components/Nav";
import Right from "./Components/Right";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="section">
        <div className="row sm:flex mx-1">
          <Intro />
          <Jack />
        </div>
        <div className="row sm:flex mx-1">
          <Left />
          <Right />
        </div>
      </div>
      <div className="">
        <Foot/>
      </div>
    </div>
  );
}

export default App;