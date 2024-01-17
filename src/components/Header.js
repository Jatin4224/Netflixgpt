import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
        />

        <div className="flex p-2">
          <img
            className="h-12 w-12 "
            src="https://occ-0-3217-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbr_in4LTQ79rnU_NqmVuGqInwNdTsop4nPoKtwPjOGWMh1kok9WLln4v7tFsGzJCMwuGoggD8j-U4aElPfTG4HXb-iyWHs.png?r=3ce"
            alt="user-icon"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            [Sign out]
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
