import { BrowserRouter, Route, Switch } from "react-router-dom";
import BT_CHONXE from "./Components/BT_CHONXE/BT_CHONXE";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import UseEffectDemo from "./Pages/Hook/UseEffectDemo/UseEffectDemo";
import UseStateDemo from "./Pages/Hook/UseStateDemo/UseStateDemo";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <Switch> */}
        {/* react-router-dom (Giúp chia trang (page)) */}
        <Route path="/home" exact component={Home} />
        <Route
          path="/login"
          exact
          render={(propsRoute) => {
            return (
              <div className="container">
                <h1>login</h1>
                <Login {...propsRoute} />
              </div>
            );
          }}
        />
        <Route path="/" exact component={Home} />
        {/* </Switch> */}
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/demousestate" component={UseStateDemo} />
        <Route path="/demouseffect" component={UseEffectDemo} />
        <Route path="/btchonxe" component={BT_CHONXE} />
      </div>
    </BrowserRouter>
  );
}

export default App;
