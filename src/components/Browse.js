import Header from "./Header";
import userNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  userNowPlayingMovies();
  return (
    <div>
      <Header />
      {/* 
         MainContainer =
         - videoBackgorund
          -videoTitle
          SecondaryContainer 
          -MovieList * n
            - cards  * n
            
       */}
    </div>
  );
};
export default Browse;
