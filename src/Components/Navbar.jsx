import React from 'react'
import '../App.css';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Data from "./Data"
import request from "../request"

export default function Navbar({data, setData, setFetchURL}) {
     return (
          <div className = "Router">
               <div className = "headerInRouter"><h1>Discover</h1> </div>
               <div className= "allLink">    
               <Router >
                    <Link onClick={()=>{setData("popular"); setFetchURL(request.fetchNetflixOriginals)}} className = "linkRouiter" to = "/popular">POPULAR</Link>
                    <Link onClick={()=>{setData("newest"); ; setFetchURL(request.fetchActionMovies)}} className = "linkRouiter" to = "/newest">NEWEST</Link>
                    <Link onClick={()=>{setData("trending") ;setFetchURL(request.fetchTrending)}} className = "linkRouiter" to = "/trending">TRENDING</Link>
                    <Link onClick={()=>{setData("toprated") ; setFetchURL(request.fetchTopRated)}} className = "linkRouiter" to = "/toprated">Top Rated</Link>
                    
                    
                 </Router>
                 </div>

               <div className="search"><input className="searchinHeader" type="text"/> </div>
          </div> 
     )
}

//  <Switch>
//                          <Route exact path="/popular"> <Data  data = {data} fetchURL = {request.fetchNetflixOriginals}/></Route>
//                          <Route exact path="/newest"> <Data  data = {data} fetchURL = {request.fetchActionMovies}/></Route>
//                          <Route exact path="/trending"> <Data  data = {data}fetchURL = {request.fetchTrending}/></Route>
//                          <Route exact path="/toprated"> <Data  data = {data} fetchURL = {request.fetchTopRated}/></Route>
//                     </Switch>
