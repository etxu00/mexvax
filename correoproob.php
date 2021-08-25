<?php
include('./pandora_core/pdo.php');
$connxn = new DB_Conexion();
	$Id = 9;
	$email = 'etxu00@gmail.com';
	EnviarCorreo($Id,$connxn,$email);
	function EnviarCorreo($Id,$connxn,$email){
		//echo "correo".$email;
		/**
		 * This example shows making an SMTP connection with authentication.
		 */
		//SMTP needs accurate times, and the PHP time zone MUST be set
		//This should be done in your php.ini, but this is how to do it if you don't have access to that
		date_default_timezone_set('Etc/UTC');
		require 'PHPMailer/PHPMailerAutoload.php';
		require 'PHPMailer/class.phpmailer.php';
		require 'PHPMailer/class.smtp.php';
		//Create a new PHPMailer instance
		$mail = new PHPMailer;
		//Tell PHPMailer to use SMTP
		$mail->isSMTP();
		//Enable SMTP debugging
		// 0 = off (for production use)
		// 1 = client messages
		// 2 = client and server messages
		$mail->SMTPDebug = 0;
		//Ask for HTML-friendly debug output
		$mail->Debugoutput = 'html';
		//Set the hostname of the mail server
		$mail->Host = "smtp.ionos.mx";//smtp.office365.com
		//$mail->Host = "mail.inovati.com.mx";
		//Set the SMTP port number - likely to be 25, 465 or 587
		$mail->Port = 587;//587
		//Whether to use SMTP authentication
		$mail->SMTPAuth = true;
		//Username to use for SMTP authentication
		$mail->Username = "jonathan.salas@andjon.mx";//webmaster@autofletes.com
		//$mail->Username = "german@inovati.com.mx";
		//Password to use for SMTP authentication
		$mail->Password = "Andjon0102#";//#AFC2015#
		//$mail->Password = "master10";		
		//Set who the message is to be sent from
		$mail->setFrom('jonathan.salas@andjon.mx', 'Mexvax');
		//$mail->setFrom('german@inovati.com.mx', 'InovaTI');
		//Set who the message is to be sent to
		//$mail->addAddress('gchaparro093@gmail.com', 'German Chaparro');
		$mail->addAddress($email, 'mexvax');//$email
		$mail->addAddress('fxsptt@gmail.com', 'mexvax');
		//Set the subject line
		$mail->Subject = 'Confirmacion Reserva';
		
		$body = GetBody($Id,$connxn);
		$mail->msgHTML($body);

		if (!$mail->send()) {
		    echo "Mailer Error: " . $mail->ErrorInfo;
		} else {
		    echo "<script>alert('La reservacion se a enviado a tu correo.');</script>";
		   
		}		
	}
	function GetBody($id,$connxn)
	{
		//include('./pandora_core/pdo.php');
		//$connxn = new DB_Conexion();
		$get_reservation = $connxn->prepare("SELECT * FROM reservation WHERE reservation_id=:id_res");
		$get_reservation->execute([':id_res' =>$id]);
		$reservation = $get_reservation->fetchAll();		
		$ReservationCode = $reservation[0]["reservation_Codigo"];
		$Hotel = utf8_decode($reservation[0]["reservation_hotel"]);
		$Add = $reservation[0]["reservation_hotel_address"];
		$NumPersonas = $reservation[0]["reservation_num_person"];
		$Dest = utf8_decode($reservation[0]["reservation_des_Hotel"]);
		$Details = $reservation[0]["reservation_Detalles"];
		$CheckIN = $reservation[0]["reservation_checkin"];
		$CheckOUT = $reservation[0]["reservation_checkout"];
		$comments = utf8_decode($reservation[0]["reservation_comments"]);
		$policy = utf8_decode($reservation[0]["reservation_cancelation_policy"]);
		$Name = $reservation[0]["reservation_name"];
		$html = '<!DOCTYPE html>
<html>
<head>
	
<style type="text/css">
	.txt{
		border: none;

	}
input[type="text"]:disabled {
  background: #FFFFFF;
}	
</style>
</head>
<body style="background-color: #E6E6E6;">
<div align="center">
	<table width="600" style="background-color: #FFFFFF;">
		<td>
		<table style="height: 27px; background-color: #df3a01;" width="600">
			<tbody>
			<tr style="height: 43.6667px;">
			<td style="width: 533.333px; height: 43.6667px;"><span style="color: #ffffff;"><strong>&nbsp;01 800 831 5100&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mexvax@mexvax.com</strong></span></td>
			</tr>
			</tbody>
		</table>
		<img src="https://musing-cartwright.74-208-30-206.plesk.page/correologo.png" width="150">
		<table style="height: 107px;" width="600">
			<tbody>
				<tr style="height: 19px;">
					<td style="width: 531.333px; height: 19px;"><strong>Codigo de Reservacion:&nbsp;</strong>'.$ReservationCode.'<br><h2>'.$Hotel.'</h2><br>'.$Add.'<br><strong>&nbsp;Nombre:&nbsp;</strong>'.$Name.'</td>
				</tr>
			</tbody>
		</table>
		<br>
		<table style="height: 92px; " width="600">
			<tbody>
				<tr style="height: 18px;">
					<td style="width: 329px; height: 18px;"><strong>&nbsp;Destino:</strong>&nbsp;<h2 style="color: #EEA332;">'.$Dest.'</h2></td>
					<td style="width: 532px; height: 18px;">&nbsp;</td>
				</tr>
				<tr style="height: 18px;">
					<td style="width: 329px; height: 18px;">&nbsp; &nbsp; &nbsp; &nbsp;</td>
					<td style="width: 532px; height: 18px;">
					<p>Fecha Llegada:&nbsp;'.$CheckIN.'</p>
					</td>
				</tr>
				<tr style="height: 29px;">
					<td style="width: 600px; height: 29px;">Numero de Personas:&nbsp;&nbsp;'.$NumPersonas.'</td>
					<td style="width: 532px; height: 29px;">Fecha Salida:&nbsp;'.$CheckOUT.'</td>
				</tr>
				
				
			</tbody>
		</table>';
		// <tr style="height: 29px;">
		// 		<td style="width: 600px; height: 29px;">El pago se realizará al hacer check in en el hotel.</td>
		// 		</tr>

		// 		<tr style="height: 29px;">
		// 		<td style="width: 600px; height: 29px;">Total a Pagar en Hotel: $50 MXN</td>
		// 		</tr>
		$get_rooms = $connxn->prepare("SELECT * FROM rooms_reservation WHERE rooms_reservation_id_reservation=:id_r");
		$get_rooms->execute([':id_r' =>$id]);
        $howMany = $get_rooms->rowCount();
        $room = $get_rooms->fetchAll();
        $i=0;
        for($i=0;$i<$howMany;$i++){
        	$html.='<br><table width="600"><tbody><tr><td style="border-top: solid .2px; border-color: #C5C6C5;">Habitacion: '. utf8_decode($room[$i]["rooms_reservation_room"]).'</td></tr>';
        	$html.='<tr><td>Adultos: '.$room[$i]["rooms_reservation_adults"].'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'.utf8_decode(' Niños: '.$room[$i]["rooms_reservation_children"]).'('.$room[$i]["rooms_reservation_children_age"].')</td></tr>';
        	$html.='<tr><td>Nombre: <strong>'.utf8_decode($room[$i]["rooms_reservation_name"]).'</strong></td></tr></tbody></table><div></div>';
         }
$html.='<table style="height: 92px; background-color: #FFFFFF; " width="600"><tbody><tr><td style="border-top: solid .5px; border-color: #C5C6C5;"><strong>Comentarios: </strong>'.$comments.'</td></tr></tbody></table>';
$html.='<table style="height: 92px; background-color: #FFFFFF; " width="600"><tbody><tr><td style="border-top: solid .5px; border-color: #C5C6C5;"><strong>Politicas: </strong>'.$policy.'</td></tr></tbody></table>';         
$html.='</td></table>';
$html.='</div></body></html>';
return $html;
	}
?>