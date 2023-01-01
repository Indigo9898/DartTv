import Link from "next/link";
import React, { useState, useEffect} from "react";
import ShowItem from "../components/ShowItem";
import { searchMovies } from "./api/moviesearch";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const SearchResults  =  ({data}) => {
    const [results, setResults] = useState(data);

    console.log(results);
    if(!results.length){
        return(
            <div>
                <p>Still Loading</p>
            </div>
        )
    }else{
        return(
            <div className="h-full w-full overflow-x-hidden">
                <Nav/>
                <div className=" min-h-8/10 flex flex-col p-1rem">
                    <h1 className="self-center mt-5 mb-2 text-2xl neonText">Shows Found</h1>
                    <div className="grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 h-100 w-100 grid auto-rows-fr">
                        {results.map((show,index) => {
                            const showUrl = "https://image.tmdb.org/t/p/w500/" + show.backdrop_path
                            return(
                                <ShowItem key={show.id} showId={show.id} showName={show.name} posterUrl={showUrl}/>
                            )
                        })}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}


export async function getServerSideProps(context) {
    const showName = context.query.searchText;
    var data;

    await searchMovies(showName).then((res) => {
        data = res;
    })

    return {
        props: {
            data: data
        }
    }
}

export default SearchResults