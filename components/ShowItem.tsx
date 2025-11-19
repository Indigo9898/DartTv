import React from "react";
import Image from "next/image";
import Link from "next/link";
import { url } from "inspector";

interface ShowItemProps{
    posterUrl: string,
    showName: string,
    showId : number
}

const ShowItem = (props:ShowItemProps) => {
    return(
        <Link href={{
            pathname: "/randomepisode",
            query: {"showId" : props.showId}
        }}
        className="h-100 w-100 ">
            <div 
            className="opacity-100 h-100 w-100 white rounded-xl  border-white border-2 cursor-pointer text-white pr-2 pl-2 flex flex-col justify-center items-center pt-2rem pb-2rem"
            style={{backgroundImage: 
                'linear-gradient(to bottom, rgba(17, 0, 28, 0.25), rgba(17, 0, 28, 0.25)), url("'+props.posterUrl+'")',
                    backgroundSize: 'cover'}}
            >
                <div className="grid w-100 h-100 grid-cols-2 mt-5 justify-center items-center ">
                    <div className="flex justify-center items-center h-100 w-100">
                        <p className="text-xl "><strong>{props.showName}</strong></p>
                    </div>
                    <div className="flex justify-center items-center h-100 w-100">
                        <Image className="fill-white" alt="Add Show" src="/plus.svg" height={32} width={32}/>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ShowItem