
import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchPage from './Pages/SearchPage';




function App() {
  return (

    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
     </Router>
     </div>
  );
}

export default App;
