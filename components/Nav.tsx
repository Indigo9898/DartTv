import React from "react";
import Link from "next/link";

const Nav = () => {
    return(
        <div className="h-5 w-100 flex p-2">
            <div className="flex h-100 -ml-1rem items-center">
                <Link href="/prototype" className="neonText  text-3xl cursor-pointer"><strong>DartTV</strong></Link>
            </div>
        </div>
    )
}

export default Nav;