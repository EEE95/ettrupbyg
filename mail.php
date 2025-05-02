<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $tel = $_POST['tel'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $fullMessage = "Du har modtaget en ny besked via kontaktformularen:\n\n";
        $fullMessage .= "Navn: $name\n";
        $fullMessage .= "Telefon: $tel\n";
        $fullMessage .= "E-mail: $email\n";
        $fullMessage .= "By: $subject\n\n";
        $fullMessage .= "Besked:\n$message\n";

        $mailheader = "From:".$name."<".$email.">\r\n";

        $recipient = "e.ellgaard@hotmail.com";

        if (mail($recipient, "Ny kontaktbesked fra $name", $fullMessage, $mailheader)) {
            echo "success";  
        } else {
            echo "error"; 
        }
    }
?>
