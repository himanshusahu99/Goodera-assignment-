import React, {useState, useEffect} from 'react'
import axios from "../axios"


const base_url = "https://image.tmdb.org/t/p/original/"

export default function Data({data, fetchURL, movies, setMovies}) {
     
     useEffect(()=>{
       
               async function fetchData() {
               const request = await axios.get(fetchURL);
               setMovies(request.data.results);
               console.log(movies)
               return request;
               }
         

               fetchData();
          
          

     }, [])

     useEffect(()=>{
       
               async function fetchData() {
               const request = await axios.get(fetchURL);
               setMovies(request.data.results);
               console.log(movies)
               return request;
               }
         

               fetchData();
          
          

     }, [fetchURL])

     return (
          <div className="row-posters">
               {/* <h1> this is {data}</h1> */}
               {

                   movies?  movies.map((movie)=> {
                       return <> 
                         <img className = "row-poster" src={ `${base_url}${movie.poster_path}`} alt = {movie.name} /> 
                         </>
                    }) : <h1>Loading...</h1>
               }
          </div>
     )
}