<?php
$fio = $_POST['fio'];
$phone = $_POST['phone'];
$fio = htmlspecialchars($fio);
$phone = htmlspecialchars($phone);
$fio = urldecode($fio);
$phone = urldecode($phone);
$fio = trim($fio);
$phone = trim($phone);

if (mail("irinaboiko95@gmail.com", "Заказ звонка", "ФИО:".$fio.". Телефон: ".$phone ,"From: irinaboiko95@gmail.com \r\n")) {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>