import "./chattingWindow.css";

import CurrentChat from "./currentChat/CurrentChat";
import Correspondence from "./correspondence/Correspondence";
import InputArea from "./inputArea/InputArea";

export default function ChattingWindow() {
    return (
        <div className="chatting-window">
            <CurrentChat />
            <Correspondence />
            <InputArea />
        </div>
    );
}
