import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer"
import Search from "./components/Search/Search";

function Home() {
    return (
        <>
            <Header/>
            <Search/>
            <Main/>
            <Footer/>
        </>
    )
}

export default Home;