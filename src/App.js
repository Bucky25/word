import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Details from './Components/Details';
import Home from './Components/Home'
function App() {
  
  
  return (

    <>
      
        <Router>
        
        <Switch>
          <Route  path="/detail" component={Details} >
            {/* <Details   /> */}
          </Route>
          <Route exact path="/" >
            <Home  />
          </Route>
        </Switch>
        
      </Router>

    </>
    
  );
}

export default App;
