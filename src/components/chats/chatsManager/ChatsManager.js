import { useState } from "react";
import "./chatsManager.css";

export default function ChatManager() {
    const [showAddChatForm, setShowAddChatForm] = useState(false);

    return (
        <div className="chats-manager">
            <div className="search">
                <span className="search-icon">
                    <i className="fas fa-search"></i>
                </span>

                <input type="text" placeholder="Search Chat" />
            </div>

            <button
                onClick={() => setShowAddChatForm((show) => !show)}
                className={`add-chat ${showAddChatForm && "active"}`}>
                <i className="fas fa-plus"></i>
            </button>
        </div>
    );
}
