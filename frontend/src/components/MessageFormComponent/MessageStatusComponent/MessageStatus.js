import "./MessageStatus.scss";

function MessageStatus (props) {

    const { sendStatus, setSendStatus } = props;
    
    if (sendStatus === "sent") {
        return (
            <div id="contact_status">
                <button className="contact_status_close" style={{backgroundImage: "url(/images/close_icon.svg)"}} onClick={() => setSendStatus('idle')}></button>
                <div className="status_icon">
                    <img id="sent_icon" src="./images/envelope.svg"/>
                </div>
                <div className="sent_message">
                    <h4>Woohoo!</h4>
                    <p>Your message has been sent!</p>
                </div>
            </div>
        );
    } else if (sendStatus === "rejected") {
        return (
            <div id="contact_status">
                <button className="contact_status_close" style={{backgroundImage: "url(/images/close_icon.svg)"}} onClick={() => setSendStatus('idle')}></button>
                <div className="status_icon">
                    <img id="rejected_icon" src="./images/bang.svg"/>
                </div>
                <p>Oops! Something went wrong!</p>
            </div>
        );
    }
}

export default MessageStatus;