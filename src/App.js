
import './App.css';
import Navbar from "./Components/Navbar.jsx"
import Aside from "./Components/Aside"
import Data from "./Components/Data"
import React, {useState} from 'react'; 
import request from "./request"

function App() {
  const [data, setData] = useState("popular"); 
  const [fetchURL, setFetchURL] = useState(request.fetchNetflixOriginals); 
  const[movies, setMovies] = useState(null); 

  return (
    <div className="App">
      
     <Navbar data = {data} setData={setData} setFetchURL={setFetchURL} setMovies = {setMovies}/>
     <Data fetchURL= {fetchURL} setMovies={setMovies} movies={movies} />
     <Aside /> 

     
    </div>
  );
}

export default App;
