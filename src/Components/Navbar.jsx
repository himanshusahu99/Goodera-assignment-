import React from 'react'
import '../App.css';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Data from "./Data"
import request from "../request"
import { FiSearch } from "react-icons/fi";
const style = { color: "grey", }
export default function Navbar({data, setData, setFetchURL, setMovies}) {
     return (
          <>
          <div className = "Router">
               <div className = "headerInRouter"><h1>Discover</h1> </div>
               <div className= "allLink">    
               <Router >
                    <Link  onClick={()=>{setData("popular"); setMovies(null); setFetchURL(request.fetchNetflixOriginals)}} className = {data == "popular" ? "linkRouiter active" : "linkRouiter"} to = "/popular">POPULAR</Link>
                    <Link  onClick={()=>{setData("newest"); setMovies(null); setFetchURL(request.fetchActionMovies)}} className = {data == "newest" ? "linkRouiter active" : "linkRouiter"} to = "/newest">NEWEST</Link>
                    <Link  onClick={()=>{setData("trending") ; setMovies(null); setFetchURL(request.fetchTrending)}} className = {data == "trending" ? "linkRouiter active" : "linkRouiter"} to = "/trending">TRENDING</Link>
                    <Link  onClick={()=>{setData("toprated") ; setMovies(null); setFetchURL(request.fetchTopRated)}} className = {data == "toprated" ? "linkRouiter active" : "linkRouiter"} to = "/toprated">TOP RATED</Link>
                    
                    
                 </Router>
                 </div>
                

               <div className="search">< FiSearch style={style}/><input className="searchinHeader" type="text" placeholder="Search" /> </div>
               </div> 
          </>
     )
}

//  <Switch>
//                          <Route exact path="/popular"> <Data  data = {data} fetchURL = {request.fetchNetflixOriginals}/></Route>
//                          <Route exact path="/newest"> <Data  data = {data} fetchURL = {request.fetchActionMovies}/></Route>
//                          <Route exact path="/trending"> <Data  data = {data}fetchURL = {request.fetchTrending}/></Route>
//                          <Route exact path="/toprated"> <Data  data = {data} fetchURL = {request.fetchTopRated}/></Route>
//                     </Switch>
