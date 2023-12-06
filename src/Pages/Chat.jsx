import ChatMessages from "../Components/chat/ChatMessages";
import ChatRoom from "../Components/chat/ChatRoom";

function Chat() {
  return (
    <div className="flex justify-center items-center mt-9">
      <ChatRoom />
      {/* <ChatMessages /> */}
    </div>
  );
}

export default Chat;
