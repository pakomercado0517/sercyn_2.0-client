import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConversations } from "../redux/actions";
import useGetClientLogged from "./useGerClientLogged";

export default function useConversations() {
  const dispatch = useDispatch();
  const { $client } = useGetClientLogged();
  const conversations = useSelector((state) => state.conversations);

  useEffect(() => {
    dispatch(getConversations($client.data.id));
  }, []);

  return { conversations };
}
