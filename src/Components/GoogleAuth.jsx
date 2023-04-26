import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clientGoogleSignup, clientGoogleLogin } from "../redux/actions";
import { auth } from "../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

function GoogleAuth({ buttonText, dispatchFunction }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [googleUser, setGoogleUser] = useState(null);
  const handleClick = async (e) => {
    e.preventDefault();
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        const userName = user.displayName.split(" ");
        if (dispatchFunction === "signup") {
          dispatch(
            clientGoogleSignup({
              first_name: userName[0],
              last_name: userName[1],
              photo: user.photoURL,
              email: user.email,
              phone_number: user.phoneNumber,
            })
          );
          Swal.fire({
            title: `Bienvenido!`,
            text: "Has creado tu cuenta correctamente, ahora ya puedes iniciar sesión para continuar...",
            icon: "success",
            confirmButtonText: "Aceptar",
          }).then((res) => {
            if (res.isConfirmed) {
              navigate("/login");
            }
          });
        }
        if (dispatchFunction === "login") {
          dispatch(clientGoogleLogin({ email: user.email }));
          Swal.fire({
            title: `Bienvenido!`,
            text: "Has iniciado sesión correctamente",
            icon: "success",
            confirmButtonText: "Aceptar",
          }).then((res) => {
            if (res.isConfirmed) {
              navigate("/");
            }
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <button
        type="button"
        className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
        onClick={handleClick}
      >
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="w-6 h-6"
            viewBox="0 0 48 48"
          >
            <defs>
              <path
                id="a"
                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
              />
            </defs>
            <clipPath id="b">
              <use xlinkHref="#a" overflow="visible" />
            </clipPath>
            <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
            <path
              clipPath="url(#b)"
              fill="#EA4335"
              d="M0 11l17 13 7-6.1L48 14V0H0z"
            />
            <path
              clipPath="url(#b)"
              fill="#34A853"
              d="M0 37l30-23 7.9 1L48 0v48H0z"
            />
            <path
              clipPath="url(#b)"
              fill="#4285F4"
              d="M48 48L17 24l-4-3 35-10z"
            />
          </svg>
          <span className="ml-4">{buttonText}</span>
        </div>
      </button>
    </>
  );
}

export default GoogleAuth;
