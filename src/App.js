import logo from './logo.svg';
import './App.css';
import Home from './routes/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LessonsView from './routes/LessonsView';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/lessonview/:id'  element={<LessonsView/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
