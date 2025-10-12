
import Navbar from './Navbar.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create.js';
function App() {
return (
<Router>
<div className="App">
<Navbar/>
<div className="content">Hello World</div>
<Switch>
<Route exact path="/">
<Home />
</Route>
<Route path="/create">
<Create />
</Route>
</Switch>
</div>
</Router>
);}
export default App;