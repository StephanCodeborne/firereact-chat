import "./correspondence.css";

export default function Correspondence() {
    return (
        <div className="correspondence">
            <div className="message-container to-me">
                <img
                    className="avatar"
                    src="/avatar.png"
                    alt="interlocutors` avatar"
                />
                <div className="message">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Aspernatur id odit culpa, officiis maxime earum
                        eos eum dolores amet, quod explicabo.
                    </p>

                    <div className="time-container">
                        <span className="time">1 min ago</span>
                    </div>
                </div>
            </div>

            <div className="message-container from-me">
                <div className="message">
                    <img
                        src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
                        alt="image"
                    />
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Aspernatur id odit culpa, officiis maxime earum
                        eos eum dolores amet, quod explicabo.
                    </p>
                    <div className="time-container">
                        <span className="time">1 min ago</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
