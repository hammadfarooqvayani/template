import "./App.css";
import Header from "./Header";
import Leftpanal from "./components/Header/Leftpanal/card";
import Rightpanal from "./components/Header/Rightpanal/Right";
import Futher from "./components/Header/Futherpanal/futher";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="rightleft">
        <Leftpanal />
        <Rightpanal />
      </div>
      <div className="ter">
        <Futher/>
      </div>
    </div>
  );
}

export default App;
