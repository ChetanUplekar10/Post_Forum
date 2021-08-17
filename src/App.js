import logo from './logo.svg';
import './App.css';
import Listview from '../src/component/Listview'
import Individualview from '../src/component/Individualview'
import Userview from '../src/component/Userview'
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/"><Listview /></Route>
          <Route exact path="/userview/:id" render={(props)=><Userview {...props}/>}></Route>
          <Route exact path="/individualview/:id/comment" render={(props)=><Individualview {...props}/>}></Route>
      </Router>
    </div>
  );
}

export default App;
