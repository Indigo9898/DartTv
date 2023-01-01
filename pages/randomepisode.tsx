import Link from "next/link";
import React, {useState, useEffect, useRef} from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { getShowDetails } from "./api/moviesearch";

function getRandomInt(max) {
    console.log(max)
    return Math.floor(Math.random() * max) + 1;
  }

const RandomEpisode =  ({data}) => {
    const [results, setResults] = useState([]);
    const [numberOfSeasons, setNumSeasons] = useState(0);
    const [selectedSeason, setSelectedSeason] = useState(0);
    const [selectedEpisode, setSelectedEpisode] = useState(0);

    console.log(data)
    // console.log(numberOfSeasons)
    // console.log(selectedSeason)
    // console.log(selectedEpisode)
  
    useEffect(() => {
        if(selectedEpisode === 0){
            setResults(data);
            setNumSeasons(data.seasons.length - 1);
            setSelectedSeason(getRandomInt(data.seasons.length - 1));
            if(selectedSeason != 0){
                console.log(selectedSeason)
                setSelectedEpisode(getRandomInt(data.seasons[selectedSeason].episode_count));
            }
            if(data.seasons.length - 1 === 0){
                setSelectedEpisode(getRandomInt(data.seasons[0].episode_count));
            }
            
        } 
    })
    
    if(selectedEpisode){
        return(
            <div className="h-full w-full flex justify-center items-center flex-col bg-mainBlack text-white neonText text-2xl ">
                <Nav/>
                <div className="flex justify-center flex-col items-center h-8/10 w-100">
                    <p>Season: {selectedSeason}</p>
                    <p>Episode: {selectedEpisode}</p>
                    <Link href={"/prototype"}>Start Over</Link>
                </div>
                <Footer/>
            </div>
        )
    }else{
        return(
            <div className="h-full w-full flex justify-center items-center">
                <p>Loading</p>
            </div>
        )
    }
   
}

export async function getServerSideProps(context) {
    const showId = context.query.showId;
    var data;

    await getShowDetails(showId).then((res) => {
        data = res
    })

    return{
        props: {
            data: data
        }
    }
}
export default RandomEpisode;
