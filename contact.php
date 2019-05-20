<?php

if($_POST["submit"]) {
    $recipient="cameron@camthomp.com";
    $subject="Message from your Site";
    $sender=$_POST["Name"];
    $senderEmail=$_POST["Email"];
    $message=$_POST["Message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>