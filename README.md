# httpResonse
Simplified Ajax Request and Response Handler

httpResponse(data,requestLocation,responseLocation);

---

# Data

Data can be either a Element Id or an object.

###### Element

&#60;form id="form1">

  &#60;input id="input1">
  
  &#60;input id="input2">
  
&#60;/form>

&#60;button onclick="httpResponse('form1','phpfile.php','erro1');">SEND&#60;/button>

&#60;div id="erro1"></div>

&#60;?php

  echo $_POST['input1'];
  
  echo $_POST['input2'];
  
?>

###### Object
&#60;script>

  var data = {str1: 'hello world', str2: 'hello world2'}
  
  httpResponse(data,'phpfile.php');
  
&#60;/script>

&#60;?php
  echo $_POST['str1']; //hello world
  
  echo $_POST['str2']; //hello world2
  
?>

# Request Location

Name of File you want to receive the Data.

# Response Location

The location can be a Element Id or a function.
If there is no element or function it will automatically console.log() the response.

##### Element Id

&#60;form id="form1">

  &#60;input id="input1">
  
  &#60;input id="input2">
  
&#60;/form>

&#60;button onclick="httpResponse('form1','phpfile.php','erro1');">SEND&#60;/button>

&#60;div id="erro1">&#60;/div>

&#60;?php

  echo $_POST['input1']." - ".echo $_POST['input2'];
  
?>

Example: Form and Function

##### Object and Function

&#60;div id="data">&#60;/div>

&#60;script>

  function getData(str)
  
  {
  
    if(str == 'File Now Found'){alert('Invalid User Permissions');}
    
    else{document.getElementById('data').innerHTML(str);}
    
  }
  
  httpResponse({action: 'getData',user: '19'},'phpfile.php',getData);
  
&#60;/script>

&#60;?php

  if($_POST['action'] == 'getData' && checkUser($_POST['user']) === true)
  
  {echo "Hello World"; exit();}
  
  else
  
  {echo 'File Now Found'; exit();}
  
?>
