import {BrowserRouter,Route} from 'react-router-dom'
import AddTask from './AddTask';
import Deletetask from './components/Deletetask';
import Edittask from './components/Edittask';

import NavBar from './components/Navbar';
import Showtask from './components/Showtask';
import history from './history';



function App() {
  return (
    
    <BrowserRouter history={history}>
    <NavBar/>
    <Route exact path='/' component={Showtask}/>
    <Route exact path='/edit/:id' component={Edittask}/>
    <Route exact path='/add'  component={AddTask}/>
    <Route exact path='/delete/:id' component={Deletetask}/>
    <Route/>
    <Route/>

    
    
    </BrowserRouter>
  );
}

export default App;
