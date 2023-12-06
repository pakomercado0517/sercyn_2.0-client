import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getClientData, clientLogout } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function useGetClientLogged() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, setClientLogin] = useState({});
  const clientData = useSelector((state) => state.clientData);
  clientData === "jwt expired" && dispatch(clientLogout());
  const $client = JSON.parse(localStorage.getItem("clientLogged"));

  useEffect(() => {
    const fetchClient = async () => {
      if (!$client) return [];
      const { token } = $client;
      setClientLogin($client);
      await dispatch(getClientData($client?.data.id, token));
    };
    fetchClient();
  }, [dispatch, $client?.data.id]);

  const errorLoginAlert = () => {
    Swal.fire({
      title: "Error!",
      text: "Debes iniciar sesión para acceder a esta página",
      icon: "warning",
    }).then((res) => {
      if (res.isConfirmed) {
        navigate("/login");
      }
    });
  };

  return { clientData, $client, errorLoginAlert };
}
