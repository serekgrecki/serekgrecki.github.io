<?php

function GetConnection()
{
    $conn = mysqli_connect("localhost","glasswitch", "!QAZglass2wsx", "glasswitch");
    $conn->set_charset("utf8");
    
    if($conn)
    {
        return $conn;
    }
}

function RunSelectCommand($commandtext)
{
    $conn = GetConnection();
    $command = mysqli_query($conn, $commandtext);
    return $command;
}
?>