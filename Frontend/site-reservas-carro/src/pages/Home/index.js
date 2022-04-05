import React from "react";
import Main from "./components/Main/Main";
import Search from "./components/Search/Search";
import { Helmet } from "react-helmet-async";

function Home() {

    return (
        <>
            <Helmet>
                <title> Digital Booking | Home</title>
            </Helmet>
            <Search />
            <Main />
        </>
    )
}

export default Home;