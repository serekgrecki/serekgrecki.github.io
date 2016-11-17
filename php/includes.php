<?php
include 'php/DB.php';

function GetAllCategories()
{
    $result = RunSelectCommand("SELECT * FROM categories");
    return $result;
}
?>