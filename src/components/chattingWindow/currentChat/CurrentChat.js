import "./currentChat.css";

export default function CurrentChat() {
    return (
        <div className="current-chat">
            <div className="chat-info">
                <img className="avatar" src="/avatar.png" alt="chat-avatar" />
                <div className="captions">
                    <h2 className="title">Sasha</h2>
                    <span className="about">Lorem ipsum dolor sit amet.</span>
                </div>
            </div>

            <div className="cta">
                <span role="button">
                    <i className="fas fa-phone"></i>
                </span>
                <span role="button">
                    <i className="fas fa-video-camera"></i>
                </span>
                <span role="button">
                    <i className="fas fa-info"></i>
                </span>
            </div>
        </div>
    );
}
