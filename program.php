//Program to extract each charecter from a string
<?php
  $name = "NMAMIT";     //user specified
  $len = strlen($name);
  echo "Length of string $len <br>";
  for($i = 0; $i != $len; $i++)
  {
    echo $name[$i];
    echo "<br>";
  }
 ?>


//Program to check whether a given charecter is a vowel or not
<?php
  $ch = 'a';      //user specified
  if($ch == 'A' || $ch = 'E' || $ch = 'I' || $ch 'O' || $ch = 'U' || $ch = 'a' || $ch = 'e' || $ch = 'i' || $ch = 'o' || $ch = 'u')
  { echo "$ch is a vowel"; }
  else
  { echo "$ch is not a vowel"; }
  ?>


//Program to check whether a given nuber is even or odd
<?php
  $number = 13;     //user specified
  if($number % 2 == 0)
  { echo "$number is even"; }
  else
  { echo "$number is odd"; }
 ?>


//Program to print numbers from 1 to 100
<?php
  for($i = 1; $i <= 100; $i++)
  { echo "$i <br>"; }
?>


//Program to check whether given number is prime or not
<?php
  $n = 10;      //user specified
  $flag = 0;
  for($i = 2; $i < $n; $i++)
  {
    if($n % $i == 0)
    {
      $flag = 1;
      break;
    }
  }
  if($flag = 0)
  { echo "$n is prime"; }
  else
  { echo "$n is not prime"; }
?>
  

//Program to print evensum and oddsum between 1 to 50
<?php
  $evensum = 0;
  $oddsum = 0;
  for($i = 1; $i <=50; $i++)
  {
    if($i % 2 == 0)
    { $evensum = $evensum + $i; }
    else
    { $oddsum = $oddsum + $i; }
  }
  echo "Even sum between 1 and 50 is $evensum <br>";
  echo "Oddsum between 1 and 50 is $oddsum";
?>  


//Program to print sum of all digits of a given number 0and check occurance of a digit
<?php
  $num = 11001;     //user specified
  $original_num = $num;      
  $digit = 1;     //user specified
  $sum = 0;
  $count = 0;
  while($num != 0)
  {
    $rem = $num % 10;
    $sum = $sum + $rem;
    
    if($rem == $digit)
    { $count = $count + 1; }
  
    $num = $num / 10;
  }
  echo "The sum of all digits of $original_num is $sum";
  echo "<br> the occurance of $digit in $original_num is $count";
?>


//Program to Demonstrate PASS by VALUE
<html>
  <body>
    <?php
    function swap($a, $b)
    {
      $temp = $a;
      $a = $b;
      $b = $temp;
      echo "<br><br>After SWap Operation<br><br>A = $a and B = $b";
    }
   
    $a = 10;
    $b = 20;
    echo "<br> Before Swap Operation<br><br>A = $a and B = $b<br>";
    swap($a, $b);
    ?>
  </body>
</html>
 
 
//Program to demonstrate PASS by REFERENCE
<html>
  <body>
    <?php
    function swap(&$a, &$b)
    {
      $temp = $a;
      $a = $b;
      $b = $temp;
    }
  
    $a = 30;
    $b = 60;
    echo "<br>Before Swap Operation<br><br>A = $a and B = $b<br>";
    swap($a, $b);
    echo "<br>After Swap Operation<br><br>A = $a and B = $b";
    ?>
  </body>
</html>


//Program to demonstrate DEFAULT PARAMETERS
<html>
  <body>
    <?php
    fuction add($a, $b, $c) //user specified
    {
      $sum = $a + $b + $c;
      return($sum);
    }

    $a = 30; 
    $b = 60; 
    $c = 90;
    
    echo "Using User defined values<br><br>";
    $result = add($a, $b,$c);
    echo "Addition of $a, $b, $c is $result<br><br>";
    
    echo "Using Default Values<br><br>";
    $result = add();
    echo "Addition of 10, 10, 10 is $result<br><br>";

    echo "Using Default values for C<br><br>";
    $result = add($a, $b);
    echo"Addition of $a, $b, 10 is $result<br><br>";
    ?>
  </body>
</html>


//Program for $GLOBALS[] Example
<html>
  <h2>------------USING GLOBALS----------------</h2>
  <body>
    <?php
    function global_var()
    {
      $GLOBALS["num1"] = 10;
    }

    $num1 = 20;
    echo "<h3>BEFORE FUNCTION CALL</h3>";
    echo "$num = $num1";
    global_var();
    echo "<h3>AFTER FUNCTION CALL</h3>";
    echo "$num = $num1";
    ?>
  </body>
</html>


//Program for $GLOBALS Example 2
<html>
  <h2>---------USING $GLOBALS</h2>
  <body>
    <?php
    function global_add()
    {
      $num1 = 100;
      $num2 = 200;
      echo "<h3>USING LOCAL VALUES</h3>";
      echo $num1 + $num2;
      echo "<h3>USING GLOBAL VALUE </h3>";
      echo $num1 + $GLOBALS["num3"];
    }
    
    $num3 = 10;
    global_add();
    ?>
  </body>
</html>


//Program to demonstrate using Global Keyword
<html>
  <h2>------------USING GLOBAL KEYORD-------------</h2>
  <body>
    <?php
    function global_assign()
    {
      global $num1;
      $num1 = 100;
      global $num2;
      $num2 = 200;
    }
    
    $num1 = 10;
    $num2 = 20;
    echo "<h3>ADDITION USING VALUES ($num1 & $num2)</h3>";
    echo $num1 + $num2;
    global_assign();
    echo "<br><br>";
    echo "<h3>ADDITION USING GLOBAL VALUES ($num1 & $num2)</h3>";
    echo $num1 + $num2;
    ?>
  </body>
</html>


//Program to demonstrate Statric Variable
<?php
  echo "<h3>WITHOUT USING STATIC VARIABLE</h3>";
  function display()
  {
    $num = 10;
    echo $num;
    $num++;
  }
  echo "First call<br>";
  display();
  echo "<br>Second call<br>";
  display();

  echo "<h3>USING STATIC VARIABLE</h3>";
  function display_static()
  {
    static $num = 10;
    echo $num;
    $num++;
  }
  echo "First Call<br>";
  display_static();
  echo "<br>Second Call<br>";
  display_static();
?>
()

//Program to demonstrate include() and require()
//File1: Education.php
<?php3>
  echo "<h3>Address</h3>";
  echo "Assistant Proffessor<br>Department ofe CSE<br>";
  echo "NMAMIT<br>Nitte-574110<br>";
?>
//File2: Address.php
<?php
  echo "<h3>Address</h3>";
  echo "Assistant Professor<br>Department of CSE<br>";
  echo "NMAMIT<br>Nitte-574110<br>";
?>
//File3: Personal_Details.php
<?php
  echo "<h3>Personal Details</h3>";
  echo "Name : Pooja Prabhu";
  include("Education.php");
  require("Address.php");
  echo "<br>Thank you.............");
 ?>