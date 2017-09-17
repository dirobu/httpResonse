# httpResonse
Simplified Ajax Request and Response Handler

httpResponse(data,requestLocation,responseLocation);

---

# Data

Data can be either a string or object.

###### String

httpResponse('str=hello world','phpfile.php');

<?php
  echo $_POST['str'];
?>

###### Object

var data = {str1: 'hello world', str2: 'hello world2'}
httpResponse(data,'phpfile.php');

<?php
  echo $_POST['str1']; //hello world
  echo $_POST['str2']; //hello world2
?>
