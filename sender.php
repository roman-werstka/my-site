<?php
    $name = $_POST['name'];
    // $surname = $_POST['surname'];
	  $subsubject = $_POST['subject'];
    $email = $_POST['email'];
    $message = $_POST['message'];

	$to = "roman.kovyryalov@icloud.com";
	$date = date ("d.m.Y");
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";


	$msg="
    Имя: $name /n
    Тема: $subsubject /n
    Почта: $email /n
    Сообщение: $message";
	mail($to, $subject, $msg, "From: $to ");

?>

<p>Привет, форма отправлена</p>

<!-- Фамилия: $surname /n -->
