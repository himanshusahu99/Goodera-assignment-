import React from 'react'
import '../App.css';

const year = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]

export default function Aside() {
     return (
          <> 
          <div className="aside-outer">
               <h3>Discover Options</h3>
               <div className="aside-select">
               <label > TYPE </label> <br/>
               <select className="select-full">
                    <option value="movies">Movies</option>
                    <option value="tvseries">TV series</option>
               </select>
               <br/>
               <br/>
               <label > GENRE </label> <br/>
               <select>
                    <option value="Actions">Actions</option>
                    <option value="Drama">Drama</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Thriller">Thriller</option>
               </select> <br/><br/>

               <label > YEAR </label> <br/>
               <select style={{width:"100px "}}>
                   {
                        year.map(element=><option>{element}</option>)
                        
                   }
               </select> 
               <span style={{color: 'white'}}> -- </span>
               <select style={{width:"100px "}}>
                   {
                        year.map(element=><option>{element}</option>)
                        
                   }
               </select> 

               </div>
          </div>
           
          </> 
     ) 
}