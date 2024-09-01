import Chat from "./chat/Chat";
import "./chats.css";
import ChatsManager from "./chatsManager/ChatsManager";
import UserInfo from "./userInfo/UserInfo";

export default function Chats() {
    return (
        <div className="chats">
            <UserInfo />
            <ChatsManager />

            <ul>
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
            </ul>
        </div>
    );
}
