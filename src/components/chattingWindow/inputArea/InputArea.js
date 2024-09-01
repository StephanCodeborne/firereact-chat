import { useState } from "react";
import "./inputArea.css";

import EmojiPicker from "emoji-picker-react";

export default function InputArea() {
    const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
    const [message, setMessage] = useState("");

    function handleEmojiClick(e) {
        setMessage((message) => message + e.emoji);
        setEmojiPickerOpen(false);
    }

    return (
        <form id="input-area-form">
            <div className="input-area">
                <span
                    className={`select-emoji ${emojiPickerOpen && "active"}`}
                    role="button"
                    onClick={() => setEmojiPickerOpen((isOpen) => !isOpen)}>
                    <i className="far fa-face-smile"></i>
                    <EmojiPicker
                        className="emoji-picker"
                        theme="dark"
                        emojiStyle="native"
                        skinTonesDisabled={true}
                        open={emojiPickerOpen}
                        onEmojiClick={handleEmojiClick}
                        on
                    />
                </span>

                <label className="input-field">
                    <input
                        type="text"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>

                <span className="select-image" role="button">
                    <i className="fas fa-paperclip"></i>
                </span>
            </div>

            <button
                type="submit"
                className="send"
                disabled={message ? false : true}>
                <i className="fas fa-paper-plane"></i>
            </button>
        </form>
    );
}
