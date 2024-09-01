import "./userInfo.css";

export default function UserInfo() {
    return (
        <div className="user-info">
            <div className="user">
                <img className="avatar" src="/avatar.png" alt="" />
                <h2>Stephan Sk</h2>
            </div>
            <div className="cta">
                <span role="button">
                    <i className="fas fa-ellipsis"></i>
                </span>
                {/* 
                <span role='button'>
                    <i className='fas fa-video-camera'></i>
                </span> */}

                <span role="button">
                    <i className="fas fa-pen"></i>
                </span>
            </div>
        </div>
    );
}
