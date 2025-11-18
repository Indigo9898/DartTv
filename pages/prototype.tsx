// pages/prototype.tsx  (or wherever you're using it)
import React, { useState } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const saveShowNameToLocalStorage = (show: string) => {
  localStorage.setItem("showName", show.trim());
};

const Prototype = () => {
  const [showName, setShowName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!showName.trim()) return;

    saveShowNameToLocalStorage(showName);
    // We'll use Link below for navigation — no onClick needed
  };

  return (
    <div className="h-full w-full">
      <Nav />

      <div className="h-9/10 md:h-8/10 w-full flex items-center flex-col">
        <p className="mt-5 mb-5 text-xl">Are You Ready To Toss The Dart?</p>

        <form onSubmit={handleSubmit} className="flex w-100 justify-center items-center">
          <input
            id="neonSearch"
            type="text"
            value={showName}
            onChange={(e) => setShowName(e.target.value)}
            className="w-1/2 p-1rem outline-none rounded-l-lg text-2xl bg-offWhite text-mainBlack neonBox"
            placeholder="Search Shows"
            autoFocus
          />

          <Link
            href={{
              pathname: "/searchresults",
              query: { searchText: showName.trim() },
            }}
            onClick={(e) => {
              if (!showName.trim()) {
                e.preventDefault(); // Block navigation if empty
              } else {
                saveShowNameToLocalStorage(showName);
              }
            }}
            className="bg-neonPurple neonBox text-white text-2xl p-1rem cursor-pointer rounded-r-lg hover:brightness-110 transition"
          >
            Toss The Dart
          </Link>
        </form>

        <div className="mt-5 text-xl">
          <p className="neonText">Your Shows</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Prototype;