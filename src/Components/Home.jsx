import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="homecontainer">
      <h1>Welcome to Recipe Organizer!</h1>
      <p>Create and save your favorite recipes all in one place.</p>
      <p>Start adding your own delicious recipes now and never forget a dish!</p>
   <Link to= '/recipe' >  <button>ADD RECIPES</button></Link> 
      </div>
  );
}
export default Home;
