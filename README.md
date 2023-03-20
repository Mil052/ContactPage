# App description
## App functionality:
This is a simple Contact Page, containing Contact Form and a Map.
Using Contact Form we send clients message and clients data (name and e-mail address) to our Server Rest Api, which then prepares an e-mail and sends it to our mailbox.\ 
To prepare a Map I used Maps Static API from Google Maps.
## Technologies used in project:
Frontend part is buid in React.
Backend is build in PHP. To serve e-mails I have used PHPMailer Library.
## How to run the code:
* Download the code and instal dependencies\ 
  - In "/frontend" directory run: `npm install`.
  - In "/server" directory run: `composer update`.
* Provide authentication Data for Your SMTP server in "/server/MailHandler/MailConfig.php"
* Provide your own Google Maps API Key in "/frontend/src/components/MapComponent/GoogleMap.js" 
* Create frontend production build (in "/frontend" directory run: `npm run build`).
* To run this app locally you will need a server with PHP (I have been using XAMPP). Set this project folder as the document root of your server (in server configuration file).\

You can also see the working app here:\
https://mgwebdevelopment.000webhostapp.com/contact/
