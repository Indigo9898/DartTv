// pages/randomepisode.tsx   (or whatever you named it)
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { getShowDetails } from "./api/moviesearch"; // adjust path if needed

// Simple helper – no console.log in production
const getRandomInt = (max: number) => Math.floor(Math.random() * max) + 1;

export default function RandomEpisode({ data }: { data: any }) {
  // Filter out season 0 (Specials) – this is the only smart thing we do
  const realSeasons = data.seasons.filter((s: any) => s.season_number > 0);

  // Pick random season & episode ONCE (no useEffect mess)
  const randomSeasonIndex = Math.floor(Math.random() * realSeasons.length);
  const selectedSeason = realSeasons[randomSeasonIndex].season_number;
  const selectedEpisode = getRandomInt(realSeasons[randomSeasonIndex].episode_count);

  return (
    <div className="h-full w-full flex justify-center items-center flex-col bg-mainBlack text-white neonText text-2xl">
      <Nav />

      <div className="flex justify-center flex-col items-center h-8/10 w-100">
        <p>Season: {selectedSeason}</p>
        <p>Episode: {selectedEpisode}</p>
        <Link href="/prototype">Start Over</Link>
      </div>

      <Footer />
    </div>
  );
}

// Fixed getServerSideProps – safe + no TypeScript errors
export async function getServerSideProps(context: any) {
  const showId = context.query.showId;

  // Safety first
  if (!showId || Array.isArray(showId)) {
    return { notFound: true };
  }

  // Pass showId exactly as the API expects (string)
  const data = await getShowDetails(showId);

  // If something went wrong, show 404
  if (!data || !data.seasons) {
    return { notFound: true };
  }

  return {
    props: {
      data,
    },
  };
}