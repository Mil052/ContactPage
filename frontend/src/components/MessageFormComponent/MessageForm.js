import React, { useRef, useState } from "react";
import MessageStatus from "./MessageStatusComponent/MessageStatus";
import "./MessageForm.scss";

function MessageForm (props) {
    const { mailApiAdress } = props;
    // sendStatus = idle / sent / rejected
    const [sendStatus, setSendStatus] = useState("idle");
    const form_ref = useRef();

    function sendMessage (event) {
        event.preventDefault();
        const messageData = new FormData (form_ref.current);
        const requestObject = {method: "POST", body: messageData};
        fetch (mailApiAdress, requestObject)
            .then (response => {
                if (!response.ok) {
                    throw new Error("Something went wrong!");
                }
                setSendStatus("sent");
                console.log('mail has been sent!!');
                form_ref.current.reset();
            })
            .catch (error => {
                setSendStatus("rejected");
                console.log(error.message);
            });
    }

    return (
        <section id="contact">
            <h3>CONTACT US</h3>
            <hr/>
            <form id="contact_form" onSubmit={sendMessage} ref={form_ref}>
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" minLength="2"/>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" required/>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" required minLength="5"/>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"/>
            </form>
            <button className="contact_send_button" type="submit" form="contact_form">Send Message</button>
            <MessageStatus sendStatus={sendStatus} setSendStatus={setSendStatus}/>
        </section>
    );
}

export default MessageForm;