import React from "react";
import MessageForm from "../components/MessageFormComponent/MessageForm";
import Adress from "../components/AddressComponent/Address";
import GoogleMap from "../components/MapComponent/GoogleMap";
import Links from "../components/MediaLinksComponent/MediaLinks";
import "./ContactPage.scss";

function ContactPage () {

    return (
        <div className="page">
            <div id="contact_data" style={{backgroundImage:"url(/images/bg_phone.png)"}}>
                <Adress/>
                <Links/>
            </div>
            <MessageForm mailApiAdress={"/api/contact"}/>
            <GoogleMap/>
        </div>
    );
}

export default ContactPage;

// Photo by <a href="https://unsplash.com/@alex_andrews?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexander Andrews</a> on <a href="https://unsplash.com/photos/JYGnB9gTCls?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  