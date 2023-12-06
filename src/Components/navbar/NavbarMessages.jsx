import React, { useEffect } from "react";
import { RiChat4Line, RiRadioButtonLine } from "react-icons/ri";
import useConversations from "../../Hooks/useConversations";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getConversationMessages, messagesUnreaded } from "../../redux/actions";
import useSocketIo from "../../Hooks/useSocketIo";
import { Dropdown, Avatar } from "flowbite-react";

function NavbarMessages() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const $messages = useSelector((state) => state.messages);
  const { conversations } = useConversations();
  const { onlineUsers, messages } = useSocketIo();

  const handleClick = (id) => {
    dispatch(getConversationMessages(id));
    navigate(`/chat/room/${id}`);
  };

  useEffect(() => {
    conversations.map((cnv) => dispatch(messagesUnreaded(cnv.id)));
  }, [messages]);

  /**
   * The function returns a green or gray radio button icon based on whether the email passed as an
   * argument matches an email in an array of online users.
   * @returns The function `getOnlineUser` returns a React component that renders either a green or
   * gray radio button icon based on whether the provided email matches an email in the `onlineUsers`
   * array.
   */
  const getOnlineUser = (email) => {
    const userEmail = onlineUsers.find((u) => u.email === email);

    if (userEmail) {
      return <RiRadioButtonLine className="text-green-500 mr-2" />;
    } else {
      return <RiRadioButtonLine className="text-gray-500 mr-2" />;
    }
  };

  return (
    <section className="flex justify-center relative items-center">
      <span
        className={`w-5 h-5 absolute right-2 top-0 rounded-full bg-cyan-600 text-white text-sm text-center ${
          $messages.length === 0 ? "hidden" : ""
        }`}
      >
        {$messages.length}
      </span>
      <Dropdown
        className="absolute w-56"
        arrowIcon={false}
        inline
        label={<RiChat4Line className="text-3xl text-cyan-600 mr-4 my-auto" />}
      >
        {conversations.length === 0 ? (
          <>
            <Dropdown.Header>
              <span>No hay mensajes</span>
            </Dropdown.Header>
          </>
        ) : (
          <article className="w-full">
            <Dropdown.Header>
              <span className="text-sm text-gray-500">Ultimos mensajes</span>
            </Dropdown.Header>
            {conversations.map((c) => (
              <Dropdown.Item onClick={() => handleClick(c.id)} key={c.User.id}>
                {getOnlineUser(c.User.email)}
                <Avatar alt="company-logo" img={c.User.Company?.logo} rounded />
                <span className="ml-3 text-lg bold">{c.User.first_name}</span>
              </Dropdown.Item>
            ))}
          </article>
        )}
      </Dropdown>
    </section>
  );
}

export default NavbarMessages;
