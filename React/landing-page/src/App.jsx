import * as React from "react"
import Navigation from "./Navigation";
import Banner from "./Components/Banner";
import CardBanner from "./Components/CardBanner";

export default function App() {
    return (
        <React.Fragment>
            <Navigation />
            <Banner />
            <CardBanner />
        </React.Fragment>
    )
}

// #4f546c