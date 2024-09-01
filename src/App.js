import Chats from "./components/chats/Chats.js";
import ChattingWindow from "./components/chattingWindow/ChattingWindow.js";
import Details from "./components/details/Details.js";

export default function App() {
    return (
        <div className="container">
            <Chats />
            <ChattingWindow />
            <Details />
        </div>
    );
}
