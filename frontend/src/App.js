import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import AddApplicant from './Components/AddApplicant';
import ViewApplicant from './Components/ViewApplicant';

function App() {
  return (
    <><h1 className='text-center bg-success '>Hostel Application System</h1>
    <div className="App">
        <Navbar/>
    <div className='App-header'>
      <Routes>
        <Route path='/hostelApplicant' element={<AddApplicant/>}/>
        <Route path='/ViewApplicants' element={<ViewApplicant/>}/>
      </Routes>
       
    </div>

    </div>
    </>
  );
}

export default App;
