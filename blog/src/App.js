
import Navbar from "./components/Navbar"
// import Home from "./components/home";
// import StateHooks from "./components/useStatehook"
// import UseEffect from "./components/useEffect";
import Home2 from "./components/home2";
import CreateBlog from "./components/create";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from "./components/blogDetails";


function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      {/* <StateHooks />
      <UseEffect /> */}
      {/* <Home /> */}
      <Switch>
        <Route exact path='/'><Home2 /></Route>
        <Route path="/create"><CreateBlog/></Route>
        <Route path="/blogs/:id"><BlogDetails/></Route>
      </Switch>
 
    </div>
    </Router>
  );
}

export default App;
