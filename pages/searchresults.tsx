// pages/searchresults.tsx
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ShowItem from "../components/ShowItem";
import { searchMovies } from "./api/moviesearch"; // adjust path if needed

type Show = {
  id: number;
  name: string;
  backdrop_path: string | null;
};

type Props = {
  data: Show[];
};

export default function SearchResults({ data }: Props) {
  // If no results (empty array or null), show friendly message
  if (!data || data.length === 0) {
    return (
      <div className="h-full w-full overflow-x-hidden bg-mainBlack text-white">
        <Nav />
        <div className="min-h-screen flex flex-col items-center justify-center p-1rem">
          <h1 className="text-4xl neonText mb-4">No shows found</h1>
          <p className="text-xl">Try searching for something else!</p>
          <Link href="/prototype" className="mt-8 text-neonPurple underline text-lg">
            ← Back to search
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="h-full w-full overflow-x-hidden">
      <Nav />

      <div className="min-h-8/10 flex flex-col p-1rem">
        <h1 className="self-center mt-3rem mb-3rem text-3xl neonText">Shows Found</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 h-100 w-100 auto-rows-fr">
          {data.map((show) => {
            const posterUrl =
              show.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${show.backdrop_path}`
                : "/fallback-poster.jpg"; // optional: add a placeholder image

            return (
              <ShowItem
                key={show.id}
                showId={show.id}
                showName={show.name || "Untitled Show"}
                posterUrl={posterUrl}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Fixed & safe getServerSideProps – no TypeScript errors
export async function getServerSideProps(context: any) {
  const searchText = context.query.searchText;

  // If no search query, redirect or show empty
  if (!searchText || Array.isArray(searchText)) {
    return {
      props: { data: [] },
    };
  }

  try {
    const data = await searchMovies(searchText as string);

    return {
      props: {
        data: data || [], // always pass array, never null/undefined
      },
    };
  } catch (error) {
    console.error("Search failed:", error);
    return {
      props: { data: [] },
    };
  }}