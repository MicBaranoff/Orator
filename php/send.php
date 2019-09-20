<!-- 

<?php
	// $project_name = "Заявка с сайта";
	// $from_email = "wladislaw353@gmail.com";
	// $to_email = "senior.mishel@gmail.com";
	
	// $message = "Имя: ".trim($_POST["name"]);
	// $message .= "; Телефон: ".trim($_POST["phone"]);
	// $message .= "; Город: ".trim($_POST["city"]);
	// if(isset($_POST["message"])) $message .= "; Сообщение: ".trim($_POST["message"]);
	
	// $headers = "From: $from_email \r\n";
	// $headers .= "Content-type: text/html; charset=utf-8";

	// $send_mail = mail($to_email, $project_name, $message, $headers);
	// if($send_mail){
		
	// }
	// else{
		
	// }
?> -->


<?php
	$project_name = "Тестовая форма";
	$from_email = "i@up-site.com.ua";
	$to_email = "senior.mishel@gmail.com";
	
	$name = trim($_POST["name"]);
	$phone = trim($_POST["phone"]); 
	$city = trim($_POST["city"]);
	$text = trim($_POST["message"]);
	
	$message = "Имя: $name \nТелефон: $phone \nГород: $city \nСообщение: $text" ;.
	$headers = "From: $from_email \r\n";
	$headers .= "Content-type: text/html; charset=\"utf-8\"";
	
	mail($to_email, $project_name, $message, $headers);
?>
