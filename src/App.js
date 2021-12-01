import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import ComponentRoutes from './Component/ComponentRoutes/ComponentRoutes';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('')
  return (
    <div>
      <Header setSearch={setSearch}/>
      <ComponentRoutes search={search}/>
      <Footer/>
      
    </div>
  );
}

export default App;
