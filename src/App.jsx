import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import AddRecipe from "./Addrecipe";
import Viewrecipes from './Viewrecipes'
  function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/recipe" element={<AddRecipe />} />
        <Route path='/view' element={<Viewrecipes/>} />
      </Routes>
    </>
  );
}
export default App;
