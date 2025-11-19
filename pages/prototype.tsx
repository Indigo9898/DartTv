// pages/prototype.tsx ← YOUR CODE + PERFECT SEAMLESS INFINITE LOOP
import React, { useState, useRef } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ShowItem from "../components/ShowItem";

const saveShowNameToLocalStorage = (show: string) => {
  localStorage.setItem("showName", show.trim());
};

const placeholderShows = [
  {showName:"Sweet Tooth", showId: 103768, posterUrl:"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"},
  {showName:"Sweet Tooth", showId: 103768, posterUrl:"https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"},
  {showName:"Sweet Tooth", showId: 103768, posterUrl:"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"},
  {showName:"Sweet Tooth", showId: 103768, posterUrl:"https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"},
  {showName:"Sweet Tooth", showId: 103768, posterUrl:"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"},
  {showName:"Sweet Tooth", showId: 103768, posterUrl:"https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"},
  {showName:"Sweet Tooth", showId: 103768, posterUrl:"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"},
  {showName:"Sweet Tooth", showId: 103768, posterUrl:"https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"},
  {showName:"Sweet Tooth", showId: 103768, posterUrl:"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"},
  {showName:"Sweet Tooth", showId: 103768, posterUrl:"https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"},
  {showName:"Sweet Tooth", showId: 103768, posterUrl:"https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"},
];

// Duplicate just twice (original + one copy on each side = seamless loop)
const infiniteList = [...placeholderShows, ...placeholderShows, ...placeholderShows];

export default function Prototype() {
  const [showName, setShowName] = useState("");
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const itemWidth = scrollWidth / 3; // Each copy takes 1/3 of total width

    // Scrolled past the left edge → jump to the end
    if (scrollLeft <= 0) {
      carouselRef.current.scrollLeft = scrollWidth - clientWidth;
    }
    // Scrolled past the right edge → jump to the start
    else if (scrollLeft + clientWidth >= scrollWidth) {
      carouselRef.current.scrollLeft = itemWidth;
    }
  };

  // Start in the middle copy so it can go both directions
  React.useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = carouselRef.current.scrollWidth / 3;
    }
  }, []);

  return (
    <div className="h-full w-full min-h-screen flex flex-col bg-mainBlack text-white neonText">
      <Nav />

      <div className="h-9/10  md:h-8/10 w-full flex items-center flex-col flex-1">
        <p className="mt-3rem text-4xl font-bold">Are You Ready To Toss The Dart?</p>
        <p className="text-white mt-1rem mb-3rem">Random Episode Generator</p>

        <div className="flex w-1/2 justify-center items-center">
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
              if (!showName.trim()) e.preventDefault();
              else saveShowNameToLocalStorage(showName);
            }}
            className="bg-neonPurple neonBox text-white text-2xl p-1rem cursor-pointer rounded-r-lg hover:brightness-110 transition"
          >
            Toss The Dart
          </Link>
        </div>

        {/* SEAMLESS INFINITE LOOP CAROUSEL */}
        <div className="w-6/10 mt-8rem">
          <h2 className="text-left mb-3rem text-3xl font-bold text-white mb-8">Popular Shows</h2>

          <div className="relative">

            <button
              onClick={() => carouselRef.current?.scrollBy({ left: -500, behavior: "smooth" })}
              className="absolute -left-14 top-1/2 -translate-y-1/2 z-10 bg-neonPurple/90 hover:bg-neonPurple neonBox w-16 h-16 rounded-full flex items-center justify-center text-5xl font-bold shadow-2xl"
            >
              ←
            </button>

            <button
              onClick={() => carouselRef.current?.scrollBy({ left: 500, behavior: "smooth" })}
              className="absolute -right-14 top-1/2 -translate-y-1/2 z-10 bg-neonPurple/90 hover:bg-neonPurple neonBox w-16 h-16 rounded-full flex items-center justify-center text-5xl font-bold shadow-2xl"
            >
              →
            </button>

            <div
              ref={carouselRef}
              id="carousel"
              className="overflow-x-auto overflow-y-hidden px-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
              onWheel={(e) => {
                e.preventDefault();
                carouselRef.current!.scrollLeft += e.deltaY * 1.5;
              }}
              onScroll={handleScroll}  // ← This makes it truly infinite & seamless
            >
              <style jsx>{`
                div::-webkit-scrollbar { display: none; }
              `}</style>

              <div className="flex flex-nowrap gap-6 py-4">
                {infiniteList.map((show, i) => (
                  <div key={i} className="flex-shrink-0">
                    <ShowItem
                      showId={show.showId}
                      showName={show.showName}
                      posterUrl={show.posterUrl}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}