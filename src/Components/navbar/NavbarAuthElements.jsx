import React from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import useGetClientLogged from "../../Hooks/useGerClientLogged";
import { Link } from "react-router-dom";
import { clientLogout, clearClientLoggedFromStore } from "../../redux/actions";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import NavbarMessages from "./NavbarMessages";

function NavbarAuthElements() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { $client, clientData } = useGetClientLogged();

  const handleLogout = async () => {
    await dispatch(clientLogout());
    await dispatch(clearClientLoggedFromStore());
    await Swal.fire({
      title: `Cerraste Sesión!`,
      text: "Vuelve pronto 🥺",
      icon: "warning",
      confirmButtonText: "Aceptar",
    }).then((res) => {
      if (res.isConfirmed) {
        navigate("/login");
      }
    });
  };

  return (
    <section className="flex md:order-2">
      {!$client ? (
        <>
          <Link to="/signin">
            <span className={`text-cyan-600 pl-2 mx-2`}>Crea una cuenta</span>
          </Link>
          <Link to="/login">
            <span className={`text-cyan-600 pl-2 mx-2`}>Inicia Sesión </span>
          </Link>
        </>
      ) : (
        <>
          {/* <NavbarMessages /> */}
          <div>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="user settings"
                  className="mr-4"
                  img={clientData?.photo}
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{`${clientData?.first_name} ${clientData?.last_name}`}</span>
                <span className="block truncate text-sm font-medium">{`${clientData?.email}`}</span>
              </Dropdown.Header>
              <Link to="/client_profile">
                <Dropdown.Item>
                  <span className={`pl-2 mx-2`}>Mi perfil</span>
                </Dropdown.Item>
              </Link>
              <Dropdown.Item onClick={handleLogout}>
                <span className={`pl-2 mx-2 cursor-pointer`}>
                  Cerrar Sesión
                </span>
              </Dropdown.Item>
            </Dropdown>
          </div>
        </>
      )}
      <Navbar.Toggle />
    </section>
  );
}

export default NavbarAuthElements;
