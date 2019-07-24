import React from "react";
import Hero from "../components/Hero";



function About(){
    return (
        <div>
             <Hero backgroundImage="../hero/groceries.jpg" className="hero" >
                <h1>RealDeal</h1>
                <h2>Your best grocery shopping app</h2>
            </Hero> 
        </div>
    )
}

export default About;