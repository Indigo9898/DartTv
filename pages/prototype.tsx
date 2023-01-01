import React from "react";

import { useState } from "react";
import Link from "next/link";


import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { searchMovies } from "./api/moviesearch";

const saveShowNameToLocalStorage = (show:string) => {
    localStorage.setItem("showName", show);
}

const Prototype = () => {
    const [showName, setShowName] = useState("");

    return(
        <div className="h-full w-full">
            <Nav/> 
            <div className="h-9/10 md:h-8/10 w-full flex items-center flex-col">
                <p className="mt-5 mb-5 text-xl">Are You Ready To Toss The Dart?</p>
                <div className="flex w-100 justify-center items-center">
                    <input id="neonSearch" onChange={e => { setShowName(e.currentTarget.value); }}
                    className="w-1/2 p-1rem outline-none rounded-l-lg text-2xl bg-offWhite text-mainBlack neonBox" 
                    placeholder="Search Shows"></input>
                    <Link  onClick={() => {saveShowNameToLocalStorage(showName)}} 
                    href={{
                        pathname: "/searchresults",
                        query: { searchText: showName}, 
                      }}
                    className="bg-neonPurple neonBox text-white text-2xl p-1rem cursor-pointer rounded-r-lg">Toss The Dart</Link>
                </div>
                <div className="mt-5 text-xl">
                    <p className="neonText">Your Shows</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Prototype;