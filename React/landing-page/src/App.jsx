import * as React from "react"
import Navigation from "./Components/Navigation";
import Banner from './Components/Banner'
import CardBanner from "./Components/CardBanner";
import WhoWeAre from "./Components/WhoWeAre";
import CarouselSection from "./Components/CarouselSection";

export default function App() {
    return (
        <React.Fragment>
            <Navigation />
            <Banner />
            <CardBanner />
            <WhoWeAre />
            <CarouselSection />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </React.Fragment>
    )
}