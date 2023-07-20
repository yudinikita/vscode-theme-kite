<?php

// Variables
$name = "John";
$age = 25;

if ($age >= 18) {
    echo "Welcome, $name!";
} else {
    echo "Sorry, $name. You must be 18 or older to enter.";
}

for ($i = 0; $i < 5; $i++) {
    echo "Current number: $i\n";
}

$fruits = array("apple", "banana", "orange");

function greet($name) {
    echo "Hello, $name!";
}

greet("Alice");

?>
