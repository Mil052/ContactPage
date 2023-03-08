import "./Address.scss";

function Address () {
    return (
        <div id="address">
            <div className="address_title">
                <img src="./images/position_icon.svg"/>
                <h3>LOCATION</h3>
            </div>
            <p>ul. Rynek 1, Wrocław</p>
            <div className="address_title">
                <img src="./images/phone_icon.svg"/>
                <h3>TELEPHONE</h3>
            </div>
            <p>000 000 000</p>
            <div className="address_title">
                <img src="./images/clock_icon.svg"/>
                <h3>BUSINESS HOURS</h3>
            </div>
            <p>Monday - Friday: 9:00 - 18:00</p>
            <p>Saturday: 9:00 - 15:00</p>
        </div>
    );
}
export default Address;