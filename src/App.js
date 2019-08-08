import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import { Card } from 'react-bootstrap';
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Home from './components/home'
import Forum from './components/forum'
import NewStory from './components/Newstory'
import Funny from './components/Genres/funny'
import Horror from './components/Genres/horror'
import Mystery from './components/Genres/mystery'
import Fantasy from './components/Genres/fantasy'
import Romance from './components/Genres/romance'
import Drama from './components/Genres/drama'
import Comments from './components/comments'
import Footer from './components/footer'


function App() {
  return (
  
      <div>
        <Hero />
        <Navbar />
        {/* <SearchResultContainer />
        <SearchForm /> */}
        <itemCard
        // addWishList={this.addWishList}
        // id={item.id}
        // name={item.name}
        />
        <div style={{ height: "1000px"}}>simulating a lot of content</div>
      
        </div>
  )};
export default App;
        