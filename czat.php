
<!DOCTYPE html>
<html>
<head>
    <title>CZAT</title>
</head>
<style type="text/css">
    .box {
        width: 150px;
        height: 15px;
        border: 1px solid black;
        }
            .boxname {
        width: 50px;
        height: 15px;
        border: 1px solid black;
        }
        .buttek
        {
            width: 70px;
            height: 18px;
            border: 1px solid black;
        }
</style>
<body>
<form name="form" method="post">
wiadomość:<input type="text" name="text_box" class="box" /><br>
nick:<input type="text" name="name_box" class="boxname" />
                     <input type="submit" name="button" class="buttek" onclick="function function_name() {
    <?php
$text=@$_POST["text_box"];
$name=@$_POST["name_box"];
if (strlen($text) < 100 && strlen($text) > 1 && strlen($name) > 1 && strlen($name) < 10)
{
$file_to_delete = "czat\\text9.txt";
unlink($file_to_delete);
rename("czat\\text8.txt", "czat\\text9.txt");
rename("czat\\text7.txt", "czat\\text8.txt");
rename("czat\\text6.txt", "czat\\text7.txt");
rename("czat\\text5.txt", "czat\\text6.txt");
rename("czat\\text4.txt", "czat\\text5.txt");
rename("czat\\text3.txt", "czat\\text4.txt");
rename("czat\\text2.txt", "czat\\text3.txt");
rename("czat\\text1.txt", "czat\\text2.txt");
rename("czat\\text0.txt", "czat\\text1.txt");
$firstfile = "czat\\text0.txt";
$fh = fopen($firstfile,'w');
$textToWrite=$name ." : ". $text;
fwrite($fh,$textToWrite);
fclose($fh);
}
?>
}" value="Wyślij" />
</form>
<?php 
echo file_get_contents("czat\\text9.txt"); 
echo "<br>";
echo file_get_contents("czat\\text8.txt"); "\r\n";
echo "<br>";
echo file_get_contents("czat\\text7.txt"); "\r\n";
echo "<br>";
echo file_get_contents("czat\\text6.txt"); "\r\n";
echo "<br>";
echo file_get_contents("czat\\text5.txt"); "\r\n";
echo "<br>";
echo file_get_contents("czat\\text4.txt"); "\r\n";
echo "<br>";
echo file_get_contents("czat\\text3.txt"); "\r\n";
echo "<br>";
echo file_get_contents("czat\\text2.txt"); "\r\n";
echo "<br>";
echo file_get_contents("czat\\text1.txt"); "\r\n";
echo "<br>";
echo file_get_contents("czat\\text0.txt"); "\r\n";
echo "<br>";

?>
</body>
</html>