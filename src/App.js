
import './App.css';
import Main from './components/Main/Main'
// import Data from './components/Data'
import {Route, Switch} from 'react-router-dom'
import Movie from './components/Movie/Movie';
import CustomModals from './components/UI/CustomModals'
function App() {
 
  return (
    <div className="App">
      <CustomModals/>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path ='/Movie/:id' component={Movie}/>
        {/* <Main Data={Data}/> */}
      </Switch>
    
    </div>
  );
}

export default App;
