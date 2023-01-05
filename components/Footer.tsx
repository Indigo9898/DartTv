import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-1/10 justify-end w-100 flex items-center">
      <div className="flex mr-5 w-fit whitespace-nowrap">
        <p className="neonText">
          <strong>Powered By</strong>
        </p>
      <Image className="ml-1rem" alt="The Movie Database Logo" src="/TheMovieDataBase.svg" height={42} width={42}/>
      </div> 
    </div>
  );
};

export default Footer;
