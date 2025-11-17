import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import AddRecipe from "./Addrecipe";
import Viewrecipes from './Viewrecipes'
import EditRecipe from "./EditRecipe";
  function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/recipe" element={<AddRecipe />} />
        <Route path='/view' element={<Viewrecipes />} />
        <Route path="/edit/:id" element={<EditRecipe />} />

      </Routes>
    </>
  );
}
export default App;
