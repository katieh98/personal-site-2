import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Header />
        <BrowserRouter />
        <NavBar />
        <Switch>
          <Route path="/About" component{About} />
          <Route exact path="/" component={Home} />
        </Switch>
        <BrowserRouter />
        <Socials />
        <Footer />
      </div>
  );
}

export default App;
