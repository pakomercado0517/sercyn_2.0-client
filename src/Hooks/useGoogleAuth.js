import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function useGoogleAuth() {
  const [googleUser, setGoogleUser] = useState({});

  useEffect(() => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        const userName = user.displayName.split(" ");
        setGoogleUser({
          first_name: userName[0],
          last_name: userName[1],
          photo: user.photoURL,
          email: user.email,
          phone_number: user.phoneNumber,
        });
      })
      .catch((error) => console.log(error));
  }, []);
  return googleUser;
}
