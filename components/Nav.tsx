import React from "react";
import Link from "next/link";

const Nav = () => {
    return(
        <div className="h-1/10 w-100 flex">
            <div className="flex h-100 w-7/10 items-center">
                <Link href="/prototype" className="neonText ml-5 text-3xl cursor-pointer"><strong>DartTV</strong></Link>
            </div>
        </div>
    )
}

export default Nav;