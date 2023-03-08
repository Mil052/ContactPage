<?php
    // You need to install PHPMailer (installation via Composer is the recommended way).
    // https://github.com/PHPMailer/PHPMailer

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require __DIR__ . "/MailConfig.php";

    class MailHandler {

        private $mail;

        public function __construct () {
           $this->mail = new PHPMailer(true);
        }

        private function setServerSettings () {
            $this->mail->isSMTP();
            $this->mail->Host       = SMTP_HOST;
            $this->mail->SMTPAuth   = true;
            $this->mail->Username   = SMTP_USERNAME;
            $this->mail->Password   = SMTP_PASSWORD;
            $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $this->mail->Port       = 587;
        }

        public function sendMail($name, $email, $title, $message) {
                $this->setServerSettings();
                //Recipients
                $this->mail->setFrom(SMTP_USERNAME, 'Contact Form');
                $this->mail->addAddress(SMTP_USERNAME, 'Contact Form');
                $this->mail->addReplyTo($email, $name);

                //Attachments
                // $mail->addAttachment('./public/image.jpg', 'new.jpg');

                //Content
                $this->mail->Subject = $title;
                $this->mail->Body    = $message;

                $this->mail->send();
        }
    }