import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Data from "./data";

export default function App() {
    return (
        <section className="App">
            <Header />
            <div className="cards">
                {Data.map( travel =>
                    <Card {...travel} />
                )}
            </div>
            <Footer />
        </section>
    )
} 