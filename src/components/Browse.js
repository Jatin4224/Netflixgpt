import Header from "./Header";
import userNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  userNowPlayingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};
export default Browse;
