import React from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero"
import Allies from "./allies/Allies";
import Services from "./services/Services";
import SubscribeNewsletter from "./subscribeNewletter/SubscribeNewsletter";
import Footer from "./footer/Footer";
import "./App.css"


export default function App(){
    return(
        <div className="container">
            <Header/>
            <Hero />
            <Allies />
            <Services />
            <SubscribeNewsletter />
            <Footer />
        </div>
    )
}