
import './App.css';
import NavBar from './Components/NavBar'
import Cardss from './Components/Cardss';
import Profile from './Components/Profile';
import Contacts from './Components/Contacts';
import Footers from './Components/Footers';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Profile />
      <Cardss/>
      <Contacts/>
      <Footers/>
      
    </div>
  );
}

export default App;
