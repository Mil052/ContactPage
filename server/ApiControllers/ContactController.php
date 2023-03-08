<?php
    require __DIR__ . "/../MailHandler/MailHandler.php";

    class ContactController {

        public function processRequest () {
            $name = empty($_POST["name"]) ? "Anonymous User" : $_POST["name"];
            $email = $_POST["email"];
            $title = $_POST["title"];
            $message = empty($_POST["message"]) ? "This message has no content." : $_POST["message"];

            try {
                $mailHandler = new MailHandler;
                $mailHandler->sendMail($name, $email, $title, $message);
                header("HTTP/1.1 204 No Content");
            } catch (Exception $ex) {
                header("HTTP/1.1 500 Internal Server Error");
            }
        }
    }