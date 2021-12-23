import './App.css';
import {Home, Repo, Repos} from './pages'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Home />}>
        <Route path=':username' element={<Repos />} />
        <Route path=':username/:repo' element={<Repo />} />
      </Route>
    </Routes>
  );
}

export default App;
