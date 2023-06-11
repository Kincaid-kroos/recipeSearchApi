import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Recipess from './Recipe';
import Footer from './Footer'


function App() {

  const[recipes,setRecipes] = useState([])
  const[search, setSearch] = useState("")
  const[query,setQuery] = useState("pizza")


const APP_ID= "d7ab3ec4";
const APP_KEY= "b4cf73c67ac1a11b25854ea1be10ccce";

useEffect(() => {
getRecipe()
}, [query])

const getRecipe = async () => {
  try { 
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = response.data;
    setRecipes(data.hits)
    console.log(data.hits)
    // Process the data as needed
  } catch (error) {
    // Handle any errors that occur during the request
    console.error(error);
  }
};

 const handleChanges = (e) => {
const {value} = e.target
setSearch(value)
 }
const getsearchOnSubmit = (e) =>{
  e.preventDefault()
  setQuery(search)
  setSearch('')
}


  return (
    <div className="App">
     <form className='search-form'  onSubmit={getsearchOnSubmit}>
<input  className='search-bar' value={search}  onChange={handleChanges}></input>
<button className='search-button' >Search</button>
     </form>
     <section>
      {recipes.map(recipe => (
        <Recipess
        key={recipe.recipe.label}
        title = {recipe.recipe.label}
        Calories = {recipe.recipe.calories}
        img = {recipe.recipe.image}
/>
))}
    
     </section>
     <Footer />
    </div>
  );
}

export default App;
