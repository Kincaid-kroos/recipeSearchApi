import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Recipess from './Recipe';
import Footer from './Footer'
import Header from './Header';


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

 const handleChangesOnInput = (e) => {
const {value} = e.target
setSearch(value)
 }
const getsearchOnSubmit = (e) =>{
  e.preventDefault()
  setQuery(search)
  setSearch('')
}

//a function to handle click
const frequentSearchClick = (item) => {
  setQuery(item)
}
 

  return (
    <div className="App">
      <main>
<Header />
      </main>
     <div className='flex justify-center items-center'>
     <form className='flex gap-4'  onSubmit={getsearchOnSubmit}>
<input  className='rounded-full' value={search}  onChange={handleChangesOnInput} placeholder='Pilau'></input>
<button className='bg-[#7c2525] text-white rounded-full px-4 py-2' >Search</button>
     </form>
     </div>
     <div className='md:mx-8 mt-6'>
     <h2 className="font-bold text-left text-[#e9dcd9] md:pt-4">
          Frequent Searches?  
        </h2>
        
        
        <div className='flex flex-wrap pt-2 gap-1'>
          <p className='bg-[#7c2525] text-white rounded-full px-4 py-2' onClick={() => frequentSearchClick('chocolate')} >Chocolate</p>
          <p className='bg-[#367c25] text-white rounded-full px-4 py-2' onClick={() => frequentSearchClick('coffee')}>Coffee</p>
          <p className='bg-[#45a9d8] text-white rounded-full px-4 py-2' onClick={() => frequentSearchClick('banana')}>Banana</p>
          <p className='bg-[#d1aa3f] text-white rounded-full px-4 py-2' onClick={() => frequentSearchClick('pizza')}>Pizza</p>
          <p className='bg-[#6a38c7] text-white rounded-full px-4 py-2' onClick={() => frequentSearchClick('cappucino')}>Cappucino</p>
          <p className='bg-[#0c0f2e] text-white rounded-full px-4 py-2' onClick={() => frequentSearchClick('cake')}>Cake</p>
          <p className='bg-[#38c757] text-white rounded-full px-4 py-2'onClick={() => frequentSearchClick('mango')}>Mango</p>
        </div>
        
      

     </div>
     <section className='flex justify-around flex-wrap space-x-8'>
      {recipes.map(recipex => (
        <Recipess
        key={recipex.recipe.label}
        title = {recipex.recipe.label}
        Calories = {recipex.recipe.calories}
        img = {recipex.recipe.image}
        ingredients = {recipex.recipe.ingredients}
/>
))}
    
     </section>
     <Footer />
    </div>
  );
}

export default App;
