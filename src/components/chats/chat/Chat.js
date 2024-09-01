import "./chat.css";

export default function Chat() {
    return (
        <li className="chat">
            <img className="avatar" src="/avatar.png" alt="chat-avatar" />
            <div className="captions">
                <h3 className="title">Sasha</h3>
                <span className="last-message">Hello</span>
            </div>
        </li>
    );
}
