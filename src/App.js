import "./App.css";
import Foot from "./Components/Foot";
import Intro from "./Components/Intro";
import Jack from "./Components/Jack";
import Left from "./Components/Left";
import Nav from "./Components/Nav";
import Right from "./Components/Right";

function App() {
  return (
    <div className="App max-w-5xl m-auto">
      <Nav />
      <div className="section">
        <div className="row sm:flex mx-2">
          <Intro />
          <Jack />
        </div>
        <div className="row sm:flex mx-2">
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