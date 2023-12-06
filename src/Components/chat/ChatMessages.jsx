import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal } from "flowbite-react";
import { RiSendPlaneFill } from "react-icons/ri";
import { format } from "timeago.js";
import useSocketIo from "../../Hooks/useSocketIo";
import { newMessage, getConversationMessages } from "../../redux/actions";

const ChatMessages = () => {
  const dispatch = useDispatch();
  const $messages = useSelector((state) => state.messages);

  const [chatMessage, setChatMessage] = useState({ text: "" });
  const { socket, clientData, messages, setMessages } = useSocketIo();

  useEffect(() => {
    const getBDMessages = async () => {
      await dispatch(getConversationMessages(1));
    };

    getBDMessages();
  }, []);

  useEffect(() => {
    setMessages($messages);
  }, [$messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    dispatch(newMessage(chatMessage));
    socket?.emit("new_message", chatMessage);
    setMessages((prev) => [...prev, chatMessage]);
    setChatMessage({ text: "" });
  };

  const handleChange = (e) => {
    setChatMessage({
      userId: 1,
      clientId: clientData.id,
      text: e.target.value,
      sender: clientData.id,
      receiverEmail: "checko@email.com",
      conversationId: 1,
    });
  };

  return (
    <section className="h-[80vh]">
      <h3 className="font-bold text-center mb-8 text-sm  text-blue-800">
        Hola {clientData.first_name} estas en línea y puedes empezar a chatear
      </h3>
      <div className="flex flex-col flex-grow w-full h-full bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          {messages.length > 0 &&
            messages.map((msg, index) => {
              return (
                <div key={index}>
                  {msg.sender !== clientData.id ? (
                    <div className={`flex w-full mt-2 space-x-3 max-w-xs`}>
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" />
                      <div>
                        <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                          <p className="text-sm">{msg.text}</p>
                        </div>
                        <span className="text-xs text-gray-500 leading-none">
                          {format(msg.createdAt, "es_MX")}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                      <div>
                        <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                          <p className="text-sm">{msg.text}</p>
                        </div>
                        <span className="text-xs text-gray-500 leading-none">
                          {format(msg.createdAt, "es_MX")}
                        </span>
                      </div>
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" />
                    </div>
                  )}
                </div>
              );
            })}
        </div>
        <form className="bg-gray-300 p-4 flex gap-2" onSubmit={sendMessage}>
          <input
            className="flex items-center h-10 w-full rounded px-3 text-sm"
            type="text"
            placeholder="Type your message…"
            name="text"
            id="newMessage"
            value={chatMessage.text}
            onChange={handleChange}
          />
          <Button type="submit">
            <RiSendPlaneFill className="text-white text-sm" />
            <span className="text-sm">Enviar</span>
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ChatMessages;
