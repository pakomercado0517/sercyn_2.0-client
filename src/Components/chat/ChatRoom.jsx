import { useSelector, useDispatch } from "react-redux";
import { getConversationMessages } from "../../redux/actions";
import { Navbar, Avatar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { SiChatbot } from "react-icons/si";
import useSocketIo from "../../Hooks/useSocketIo";

function ChatRoom() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const conversations = useSelector((state) => state.conversations);
  const { onlineUsers, clientData } = useSocketIo();

  const handleOpenChat = (id) => {
    if (id !== 0) {
      dispatch(getConversationMessages(id));
      navigate("/chat/room");
    } else navigate("/chat/room");
  };

  return (
    <div className="w-[25%] border border-solid shadow-2xl shadow-blue-700 rounded-lg h-[68vh]">
      <header className="border border-solid shadow-md shadow-blue-400 rounded-md mb-3">
        <Navbar fluid rounded>
          <Navbar.Brand>
            <SiChatbot className="text-2xl text-blue-700" />
            <span className="text-lg bold ml-3">Conversaciones.</span>
          </Navbar.Brand>
        </Navbar>
      </header>
      <section className="h-1/3 flex flex-col">
        {conversations.length > 0 ? (
          conversations.map((c) => {
            return (
              <div
                key={c.id}
                onClick={() => handleOpenChat(c.id)}
                className="mx-3 flex items-center cursor-pointer my-2 border border-solid shadow-sm shadow-gray-400 rounded-md p-2"
              >
                <Avatar alt="company-logo" img={c.User.Company.logo} rounded />
                <span className="ml-3 text-lg bold">{c.User.first_name}</span>
              </div>
            );
          })
        ) : (
          <p>No tienes conversaciones</p>
        )}
      </section>
      <section>
        <span className="text-xs text-gray-400 text-center">
          Prestadores de servicios conectados
        </span>
        <div>
          {onlineUsers.length > 0 ? (
            onlineUsers.map((user) => {
              return (
                user.id !== clientData.id && (
                  <div
                    key={user.id}
                    className="flex items-center my-2 cursor-pointer"
                    onClick={() => handleOpenChat(0)}
                  >
                    <Avatar
                      alt="user_photo"
                      img={`${
                        user.type === "user" ? user.Company?.logo : user.photo
                      }`}
                      rounded
                    />
                    <span className="ml-3 text-lg bold">{user.first_name}</span>
                  </div>
                )
              );
            })
          ) : (
            <span className="text-gray-500 text-lg">
              No hay usuarios conectados
            </span>
          )}
        </div>
      </section>
    </div>
  );
}

export default ChatRoom;
