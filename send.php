<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $mail = new PHPMailer(true);

    try {

        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';

        $mail->SMTPAuth = true;

        $mail->Username = 'mohamedrahmani0696@gmail.com';

        $mail->Password = 'myqt mtos hcut rciy';

        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

        $mail->Port = 587;

        $mail->setFrom('mohamedrahmani0696@gmail.com', 'Portfolio Website');

        $mail->addAddress('mohamedrahmani0696@gmail.com');

        $mail->addReplyTo($_POST['email'], $_POST['name']);

        $mail->isHTML(true);

        $mail->Subject = $_POST['subject'];

        $mail->Body = "

        <h2>New Contact Message</h2>

        <b>Name:</b> {$_POST['name']}<br>

        <b>Email:</b> {$_POST['email']}<br><br>

        <b>Message:</b><br>

        {$_POST['message']}

        ";

        $mail->send();

        echo "<script>

        alert('Message sent successfully!');

        window.location='index.html';

        </script>";

    } catch (Exception $e) {

        echo "Mailer Error: {$mail->ErrorInfo}";

    }

}