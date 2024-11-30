import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner';
import RowPosters from './Components/RowPosters/RowPosters';
import { API_KEY } from './Constants/Constants'
import {action,originals,comedy,horror,romantic } from './Components/Urls/Urls'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      
        <Routes>
          
          <Route path='/netflix' element={<RowPosters title="Netfilx Originals" url={originals} />} />
          <Route path='/netflix1' element={<RowPosters title="Netfilx Originals" url={originals}/>} />
        </Routes>
      
      
      <RowPosters title="Action" ismall url={action} />
      <RowPosters title="Comedy" ismall url={comedy} />
      <RowPosters title="Horror" ismall url={horror} />
      <RowPosters title="Romantic" ismall url={romantic} />
   </div>
  );
}

export default App;
