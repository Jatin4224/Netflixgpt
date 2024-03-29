import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/login");
      }
    });

    //unsubscribe when component unmountsdd
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
        <img className="w-44" src={LOGO} alt="Logo" />
        {user && (
          <div className="flex p-2">
            <img className="h-12 w-12" src={user?.photoURL} alt="userimage" />
            <button onClick={handleSignOut} className="font-bold text-white">
              [Sign out]
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
