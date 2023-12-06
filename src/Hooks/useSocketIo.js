import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";
import useGetClientLogged from "./useGerClientLogged";
import { getConversations } from "../redux/actions";
const { VITE_APP_BACKEND } = import.meta.env;

const useSocketIo = () => {
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const { clientData, $client } = useGetClientLogged();
  const [isConnected, setIsConnected] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);

  // useEffect(() => {
  //   const fetchSocket = async () => {
  //     setSocket(io(VITE_APP_BACKEND));
  //     //   if (socket) {
  //     //     socket?.on("connection", () => {
  //     //       setIsConnected(true);
  //     //     });
  //     //   }
  //   };
  //   fetchSocket();
  // }, []);

  // useEffect(() => {
  //   socket?.emit("onlineUsers", { ...clientData, type: "client" });
  // }, [socket, clientData]);

  // useEffect(() => {
  //   socket?.on("new_message", (data) => {
  //     setMessages((prev) => [...prev, data]);
  //   });
  // }, [socket]);

  // useEffect(() => {
  //   socket?.on("onlineUsers", (data) => {
  //     setOnlineUsers(data);
  //   });

  //   dispatch(getConversations(clientData.id));

  //   return () => {
  //     socket?.disconnect("onlineUsers");
  //   };
  // }, [socket]);

  return {
    socket,
    isConnected,
    clientData,
    messages,
    setMessages,
    onlineUsers,
  };
};

export default useSocketIo;
