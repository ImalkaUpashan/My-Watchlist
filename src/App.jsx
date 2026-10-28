import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Movies from "./pages/Movies/Movies";
import Tvseries from "./pages/Tvseries/Tvseries";
import Wishlist from "./pages/Wishlist/Wishlist";

function App(){
  return(
    <BrowserRouter>
    <Routes>

      <Route element={<MainLayout/>}>
        
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Movies" element={<Movies/>}/>
        <Route path="/Tvseries" element={<Tvseries/>}/>
        <Route path="/Wishlist" element={<Wishlist/>}/>
        
      
      
      </Route>
      
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;