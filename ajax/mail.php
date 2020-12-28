<?php

$email = $_POST['email'];
$name = $_POST['name'];
$phone = $_POST['phone'];
//$message = 'Message from test form';

//$subject = "=?utf-8?B?".base64_encode('Message from site')."?=";
//$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

$success = mail($email, 'email: '.$email."\n".'name: '.$name, "From: no-reply \r\n");



if($success){
    echo 'success';
}else{
    echo 'some errors appeared';
}



