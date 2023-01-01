
import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import '../../styles/globals.css'
import ShowItem from "../../components/ShowItem";
import { searchMovies } from "../../pages/api/moviesearch";
import { useRouter } from 'next/navigation'

const Page = async () => {
    return(
        <div className="h-full w-full overflow-x-hidden">
            <Nav/>
            <div className=" min-h-8/10 flex flex-col p-1rem">
                <h1 className="self-center mt-5 mb-2 text-2xl neonText">Shows Found</h1>
                <div className="grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 h-100 w-100 grid">
                    <ShowItem posterUrl="test" showId={2} showName="test"/>
                    <ShowItem posterUrl="test" showId={2} showName="test"/>
                    <ShowItem posterUrl="test" showId={2} showName="test"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Page;