import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
  };

  //i make my api call inside a use Effect - so that i can call it only ones.[] dont forget (if dont use - infinite api calls)
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};
export default Browse;
