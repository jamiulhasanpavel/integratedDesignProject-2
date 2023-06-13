import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Academic_Course from './page/Academic_Course';
import Home from './page/Home';
import Skilldevelopment from "./page/Skilldevelopment"
import Motivation from './page/motivation';
import University from './page/Universitylevel';
import HigherSce from './page/HigherSce';
import Scecondary from './page/Scecondary';
import Primary from './page/Primary';
import UniversityPlay from './page/UniversityPlay';
import MotivePlay from './page/MotivePlay';
import SkillPlaylist from './page/SkillPlaylist';
function App() {
  return (
    <>
    <div className="App"> </div>
    <BrowserRouter>
      <Routes>
      
      <Route path ='/' element={<Home />} />
      <Route path ='/academicourse' element={<Academic_Course />} />
      <Route path ='/skilldevelopment' element={<Skilldevelopment />} />
      <Route path ='/skilldevelopmentplaylist' element={<SkillPlaylist />} />
      <Route path ='/motivation' element={<Motivation />} />
      <Route path ='/motivationplaylist' element={<MotivePlay />} />
      <Route path ='/universitylevel' element={<University />} />
      <Route path ='/uniplaylist' element={<UniversityPlay />} />
      <Route path ='/primary' element={<Primary />} />
      <Route path ='/highersec' element={<HigherSce />} />
      <Route path ='/secondary' element={<Scecondary />} />

      
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
