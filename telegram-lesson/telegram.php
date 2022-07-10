<?php

/* https://api.telegram.org/bot5302953493:AAG-jNha14NTXjLEe4eu7VkDQdABYl9lWVY/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$communication = $_POST['communication_type'];
$token = "5302953493:AAG-jNha14NTXjLEe4eu7VkDQdABYl9lWVY";
$chat_id = "-772644912";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thanks.html');
} else {
  echo "Error";
}
?>