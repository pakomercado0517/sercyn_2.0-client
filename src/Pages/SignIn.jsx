import React from "react";
import GoogleAuth from "../Components/GoogleAuth";
import CreateClientForm from "../Components/client/CreateClientForm";

function SignIn() {
  return (
    //second version
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-indigo-600 hidden lg:block w-1/3 md:w-1/3 xl:w-1/3 h-screen">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2Funderwater-island-sea-nature-wallpaper-preview.jpg?alt=media&token=65693162-96f1-4bec-b2fc-fb46addbcf9b"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Crear Usuario
          </h1>
          <CreateClientForm />
          <hr className="my-6 border-gray-300 w-full" />
          <GoogleAuth
            buttonText="Crea tu cuenta con Google"
            dispatchFunction="signup"
          />
        </div>
      </div>
    </section>
  );
}

export default SignIn;
