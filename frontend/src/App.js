import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import AddApplicant from './Components/AddApplicant';
import ViewApplicant from './Components/ViewApplicant';

function App() {
  return (
    <>
    <div className="App">
        <Navbar/>
    <div className='App-header'>
      <h2 className='text-center text-danger'>Comsats Hostel Registration System</h2>
      <Routes>
        <Route path='/hostelApplicants' element={<AddApplicant/>}/>
        <Route path='/viewApplicants' element={<ViewApplicant/>}/>
      </Routes>
       
    </div>

    </div>
    </>
  );
}

export default App;
