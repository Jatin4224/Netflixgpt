import Header from "./Header";
import userNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  userNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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
