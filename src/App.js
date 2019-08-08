import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
//import About from "./pages/About";
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import itemCard from './components/itemcard';
import { Card } from 'react-bootstrap';

// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
// class App extends Component {
//   state = {
//     items
//   };
// }
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
        