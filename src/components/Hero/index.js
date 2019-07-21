import React from "react";
import LazyHero from "react-lazy-hero";

function Hero(){
    return (
        <div>
        <LazyHero imageSrc="groceries.jpg" className="hero-lazy">
        <h1>Landing to the best shopping app</h1>
        </LazyHero>
        </div>
    );
    }

    export default Hero;