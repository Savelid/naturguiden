<?PHP
$errors = '';
$myemail = 'savelid@gmail.com';//<-----Put Your email address here.
if(empty($_POST['name'])  ||
   empty($_POST['email']))
{
    $errors .= "\n Error: all fields are required";
}
$name = $_POST['name'];
$email_address = $_POST['email'];
if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
  $message = '';
  if(!empty($_POST['phone'])){ $message .= "Phone: " . $_POST['phone'] . " \n"; }
  if(!empty($_POST['country'])){ $message .= "Country: " . $_POST['country'] . " \n"; }
  $message .= " \n";
  if(!empty($_POST['arrival'])){ $message .= "Arrival: " . $_POST['arrival'] . " \n"; }
  if(!empty($_POST['depature'])){ $message .= "Depature: " . $_POST['depature'] . " \n"; }
  $message .= " \n";
  if(!empty($_POST['skating'])){ $message .= "ICE SKATING \n"; }
  if(!empty($_POST['skiing'])){
    $message .= "SKIING ";
    if(!empty($_POST['standard'])){ $message .= "Standard"; }
    if(!empty($_POST['adventure'])){ $message .= "Adventure"; }
    if(!empty($_POST['midnight'])){ $message .= "Midnight"; }
    $message .= " \n";
  }
  if(!empty($_POST['kayak'])){ $message .= "KAYAK \n"; }
  if(!empty($_POST['hiking'])){
    $message .= "HIKING ";
    if(!empty($_POST['four-day'])){ $message .= "4 day trip"; }
    if(!empty($_POST['eight-day'])){ $message .= "8 day trip"; }
    if(!empty($_POST['pilgrim'])){ $message .= "Pilgrim journey"; }
    $message .= " \n";
  }
  if(!empty($_POST['number_of_people'])){ $message .= "Nr. of people: " . $_POST['number_of_people'] . " \n"; }
  $message .= " \n";
  if(!empty($_POST['comments'])){ $message .= "Comments: \n" . $_POST['comments']; }

  $to = $myemail;
  $email_subject = "NG.com Contact form submission: $name";
  $email_body = "You have received a new message. ".
  " Here are the details:\n \nName: $name \n".
  "Email: $email_address \n$message";
  $headers = "From: $myemail\n";
  $headers .= "Reply-To: $email_address";
  mail($to,$email_subject,$email_body,$headers);

  die();
}
?>
