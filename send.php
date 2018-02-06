<?php
	
	require 'PHPMailer/PHPMailerAutoload.php';

	$mail = new PHPMailer;
	
	$to = "astephannie@gmail.com"; // correo de contacto
	// datos del formulario
	$nombre = $_POST['nombre'];
	$email = $_POST['correo'];
	$mensaje = nl2br($_POST['mensaje']);
	$asunto = $nombre . " quiere contactarse contigo!";

	if ($nombre == "" || $email == "" || $mensaje == "") {
		echo "Error: Todos los campos son requeridos.";
	} else {
		$mail->From = $email;
		$mail->addAddress($to);
		$mail->Subject = $asunto;
		$mail->isHtml(true);
		$mail->Body = $nombre. " se quiere contactar con usted : <br><p>" . $mensaje . "</p>";
		$mail->CharSet = 'UTF-8';
		$mail->send();
		echo "Gracias por contactarte conmigo " . $nombre . " :) ";
	}

?>