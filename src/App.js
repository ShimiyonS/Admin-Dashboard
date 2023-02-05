import './App.css';
import { Route, Routes} from "react-router-dom";
import Dashboard from './componenets/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './page.css';
import Buttton from './componenets/Buttton';
import Tables from './componenets/Tables';
function App() {
  return (
    <div className="App">
    
      <Routes>
        
        <Route exact path='/' element = {<Dashboard/>}>

        </Route>
        <Route path ='/dashboard' element = {<Dashboard/>}>

        </Route>
        <Route path='/b' element= {<Buttton/>}>

        </Route>
        <Route path='/t' element = {<Tables/>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
