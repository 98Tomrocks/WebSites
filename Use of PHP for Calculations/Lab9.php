<?php
    $q = $_REQUEST["q"];
    $pounds= $q*.80;
    $pounds= number_format($pounds,2);
    echo "$",$q," United States Dollars is equal to:<br> ", $pounds, " British Pounds.";
?>