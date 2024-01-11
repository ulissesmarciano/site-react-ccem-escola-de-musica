import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'
 
 
import HomeScreen from "./pages/HomeScreen/index";
import GalleryScreen from './pages/Gallery';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/gallery/' element={<GalleryScreen/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
